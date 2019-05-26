import {
    ChatAdapter, IChatGroupAdapter, User, Group, Message,
    ChatParticipantStatus, ParticipantResponse, ParticipantMetadata,
    ChatParticipantType, IChatParticipant
} from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

export class MessengerAdapter extends ChatAdapter {
    public static mockedParticipants: IChatParticipant[] = [
        {
            participantType: ChatParticipantType.User,
            id: 1,
            displayName: "Hayacinth",
            avatar: "assets/bird/birds-351a.jpg",
            status: ChatParticipantStatus.Online
        },
        {
            participantType: ChatParticipantType.User,
            id: 2,
            displayName: "Scarlet",
            avatar: "assets/bird/birds-291a.jpg",
            status: ChatParticipantStatus.Online
        },
        {
            participantType: ChatParticipantType.User,
            id: 3,
            displayName: "Blue & Gold",
            avatar: "assets/bird/birds-327a.jpg",
            status: ChatParticipantStatus.Busy
        },
        {
            participantType: ChatParticipantType.User,
            id: 4,
            displayName: "King fisher",
            avatar: "assets/bird/birds-361a.jpg",
            status: ChatParticipantStatus.Offline
        },
        {
            participantType: ChatParticipantType.User,
            id: 5,
            displayName: "Peacock",
            avatar: "assets/bird/birds-353a.jpg",
            status: ChatParticipantStatus.Offline
        }];

    listFriends(): Observable<ParticipantResponse[]> {
        return of(MessengerAdapter.mockedParticipants.map(user => {
            let participantResponse = new ParticipantResponse();

            participantResponse.participant = user;
            participantResponse.metadata = {
                totalUnreadMessages: Math.floor(Math.random() * 10)
            }

            return participantResponse;
        }));
    }

    getMessageHistory(destinataryId: any): Observable<Message[]> {
        let mockedHistory: Array<Message>;

        mockedHistory = [
            {
                fromId: 1,
                toId: 999,
                message: "Hi there, just type any message bellow to test this Angular module.",
                dateSent: new Date()
            }
        ];

        return of(mockedHistory).pipe(delay(2000));
    }

    sendMessage(message: Message): void {
        setTimeout(() => {
            let replyMessage = new Message();

            replyMessage.message = "You have typed '" + message.message + "'";
            replyMessage.dateSent = new Date();

            if (isNaN(message.toId)) {
                let group = MessengerAdapter.mockedParticipants.find(x => x.id == message.toId) as Group;

                // Message to a group. Pick up any participant for this
                let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
                replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

                replyMessage.toId = message.toId;

                this.onMessageReceived(group, replyMessage);
            }
            else {
                replyMessage.fromId = message.toId;
                replyMessage.toId = message.fromId;

                let user = MessengerAdapter.mockedParticipants.find(x => x.id == replyMessage.fromId);

                this.onMessageReceived(user, replyMessage);
            }
        }, 1000);
    }

    groupCreated(group: Group): void {
        MessengerAdapter.mockedParticipants.push(group);

        MessengerAdapter.mockedParticipants = MessengerAdapter.mockedParticipants.sort((first, second) =>
            second.displayName > first.displayName ? -1 : 1
        );

        // Trigger update of friends list
        this.listFriends().subscribe(response => {
            this.onFriendsListChanged(response);
        });
    }

}
