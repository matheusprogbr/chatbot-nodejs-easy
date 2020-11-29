const utils = require("./utils");

const url = "URLwebhookHERE";

const messages = ["Eren Yaeger!", "I will destroy the Colossal Titan!", "I don`t want to suffer anymore", "Hacking the humankind..."];

const bodyConfig = {
  username: "Eren Bot",
  avatar_url: "https://i.pinimg.com/originals/34/b5/86/34b58689b0870284621a661a2c538652.png",
  content: messages[utils.math(0,messages.length)]
};

module.exports = {
  method: "post",
  url,
  headers: {
    'Content-Type': 'application/json'
  },
  data:JSON.stringify(bodyConfig)
}