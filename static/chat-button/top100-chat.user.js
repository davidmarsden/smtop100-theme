// ==UserScript==
// @name         Top 100 Chat button for Soccer Manager
// @namespace    https://smtop100.blog/
// @version      1.0.0
// @description  Adds a Top 100 Chat button to Soccer Manager pages. It opens Top 100 Chat in a side window, so the game stays open.
// @author       Top 100
// @match        https://www.soccermanager.com/*
// @match        https://soccermanager.com/*
// @match        https://*.soccermanager.com/*
// @run-at       document-idle
// @grant        none
// @noframes
// @homepageURL  https://smtop100.blog/chat-button/
// @updateURL    https://smtop100.blog/chat-button/top100-chat.user.js
// @downloadURL  https://smtop100.blog/chat-button/top100-chat.user.js
// ==/UserScript==

(function () {
  'use strict';
  var CHAT_URL = 'https://manager.smtop100.blog/chat';
  if (window.top !== window.self || document.getElementById('top100-chat-sm-button')) return;

  var chatWindow = null;
  function openChat() {
    if (chatWindow && !chatWindow.closed) { chatWindow.focus(); return; }
    var width = 440;
    var height = Math.min(820, (screen.availHeight || 900) - 80);
    var left = Math.max(0, (screen.availWidth || 1280) - width - 20);
    chatWindow = window.open(CHAT_URL, 'top100chat', 'popup=yes,width=' + width + ',height=' + height + ',left=' + left + ',top=40');
    // Pop-ups blocked: open in a new tab instead.
    if (!chatWindow) window.open(CHAT_URL, '_blank', 'noopener');
  }

  var style = document.createElement('style');
  style.textContent = [
    '#top100-chat-sm-button{position:fixed;left:16px;bottom:16px;z-index:2147483000;display:inline-flex;align-items:center;gap:8px;',
    'padding:11px 16px;border:2px solid rgba(255,255,255,.2);border-radius:999px;background:#10B981;color:#0B1F3B;cursor:pointer;',
    'font:800 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35)}',
    '#top100-chat-sm-button:hover,#top100-chat-sm-button:focus-visible{background:#34D399;outline:none}',
    '#top100-chat-sm-button span[aria-hidden]{font-size:17px}',
    '@media print{#top100-chat-sm-button{display:none}}'
  ].join('');
  document.head.appendChild(style);

  var button = document.createElement('button');
  button.id = 'top100-chat-sm-button';
  button.type = 'button';
  button.title = 'Open Top 100 Chat in a side window';
  button.innerHTML = '<span aria-hidden="true">💬</span><span>Top 100 Chat</span>';
  button.addEventListener('click', openChat);
  document.body.appendChild(button);
})();
