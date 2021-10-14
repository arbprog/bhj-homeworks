"use strict";

const chat = document.querySelector(".chat-widget");
chat.addEventListener("click", () => {
  chat.classList.add("chat-widget_active");
});

const messageField = document.querySelector(".chat-widget__input");
messageField.addEventListener("change", addClientMessage);

const chatMessages = document.querySelector( ".chat-widget__messages" );

function getMessage(message, attributeClass = "message"){
  chatMessages.innerHTML += `
    <div class="${attributeClass}">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${message}</div>
    </div>
  `;
}

function getCurrentTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
}

function addClientMessage(){
  const messageClient = messageField.value;
  if(messageClient){
    getMessage(messageClient, "message message_client")
  }
  messageField.value = "";
  setTimeout(addChatBotMessage, 1000);
}

function addChatBotMessage(){
  const arr = [
    "Вы не купили не одного товара для того, чтобы так с нами разговаривать!",
    "Кто тут?",
    "Где ваша совесть?",
    "К сожалению, все операторы сейчас заняты. Не пшите нам больше",
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать!",
  ];

  const randomNumber = Math.floor( 1 + Math.random() * ((arr.length - 1) + 1 - 1))
  const messageChatBot = arr[randomNumber];

  getMessage(messageChatBot);

}