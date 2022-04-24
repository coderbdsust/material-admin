import {
    ChatAdapter, Group, Message,
    ChatParticipantStatus, ParticipantResponse,
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
            avatar: "https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-351a.jpg?v=1648999634526",
            status: ChatParticipantStatus.Online
        },
        {
            participantType: ChatParticipantType.User,
            id: 2,
            displayName: "Scarlet",
            avatar: "https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-291a.jpg?v=1648999635005",
            status: ChatParticipantStatus.Online
        },
        {
            participantType: ChatParticipantType.User,
            id: 3,
            displayName: "Blue and Yellow",
            avatar: "https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-327a.jpg?v=1648999634449",
            status: ChatParticipantStatus.Busy
        },
        {
            participantType: ChatParticipantType.User,
            id: 4,
            displayName: "King fisher",
            avatar: "https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-361a.jpg?v=1648999634539",
            status: ChatParticipantStatus.Offline
        },
        {
            participantType: ChatParticipantType.User,
            id: 5,
            displayName: "Peacock",
            avatar: "https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-353a.jpg?v=1648999634154",
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
