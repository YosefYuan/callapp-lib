import React from 'react';
import CallApp from 'callapp-lib';
import './App.css';

const option = {
  scheme: {
    protocol: 'dewuapp',
  },
  intent: {
    package: 'com.zhihu.android',
    scheme: 'zhihu',
  },
  universal: {
    host: 'm.dewu.com/note',
  },
  appstore: 'https://itunes.apple.com/cn/app/id432274380',
  yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
  fallback: 'https://m.dewu.com/note/home/HomePage',
  timeout: 2000,
};

const lib = new CallApp(option);

const ua = navigator.userAgent || '';

function evoke(url: string) {
  var iFrame;

  iFrame = document.createElement('iframe');
  iFrame.setAttribute('src', url);
  iFrame.setAttribute('style', 'display:none;');
  iFrame.setAttribute('height', '0px');
  iFrame.setAttribute('width', '0px');
  iFrame.setAttribute('frameborder', '0');
  document.body.appendChild(iFrame);

  iFrame = null;
}

function evokeByLocation(uri: string): void {
  window.location.href = uri;
}

function evokeByTagA(uri: string): void {
  const tagA = document.createElement('a');

  tagA.setAttribute('href', uri);
  tagA.style.display = 'none';
  document.body.append(tagA);

  tagA.click();
}

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          alert(ua);
        }}
      >
        ua
      </button>
      <button
        onClick={() => {
          evoke('dewuapp://m.poizon.com/router/home/HomePage');
        }}
      >
        schema - iframe
      </button>
      <button
        onClick={() => {
          evokeByLocation('dewuapp://m.poizon.com/router/home/HomePage');
        }}
      >
        schema - location
      </button>
      <button
        onClick={() => {
          evokeByTagA('dewuapp://m.poizon.com/router/home/HomePage');
        }}
      >
        schema - A Tag
      </button>
      {/* <button
        onClick={() => {
          evokeByLocation(lib.generateIntent({ path: '' }));
        }}
      >
        intent - location
      </button> */}
      <button
        onClick={() => {
          evokeByLocation('https://m.dewu.com/note/home/HomePage');
        }}
      >
        universal-link
      </button>
      <button
        onClick={() => {
          lib.open({ path: 'router/home/HomePage' });
        }}
      >
        callapp-lib 唤端
      </button>
    </div>
  );
}

export default App;
