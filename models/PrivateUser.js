class PrivateUser {
    constructor(id, name, email, password, image, title, chatNotification, additionalPublicIdentities) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification;
        this.additionalPublicIdentities = additionalPublicIdentities;
    }
}

export default PrivateUser;