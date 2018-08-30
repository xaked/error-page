<!--
  // Created on Sun Aug 12 2018
  // Copyright © 2017-2018 Mikhail K. (iSm1le)
  // Licensed under the Apache License, Version 2.0
  -->
<template>
  <div class="main container-fluid">
    <div class="row justify-content-center text-center">
      <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 m-auto pt-2">
        <p class="title my-0">Stop right there!</p>
        <hr class="my-0">
        <p class="title-sm my-0">@{{ host }}</p>
        <img
          class="my-2"
          src="https://placeimg.com/1280/720/animals/grayscale"
          alt="Error image">
        <div
          v-if="isError"
          class="error">
          <p class="mb-1">Error <b>{{ error }}</b>!1@</p>
          <p class="mb-0 text-muted">{{ errorText }}</p>
          <hr class="my-2">
          <div class="links text-muted">
            <ul>
              <li><a
                class="text-muted"
                href="#"
                onclick="history.go(-1);">Go back</a></li>
              <li><a
                :href="href"
                class="text-muted">Home</a></li>
              <li><a
                class="text-muted"
                href="https://google.com/">Leave from here</a></li>
            </ul>
          </div>
        </div>
        <div
          v-else
          class="error">
          <p class="mb-0">What are you doing here?</p>
          <hr class="my-2">
          <div class="links text-muted">
            <ul>
              <li><a
                class="text-muted"
                href="#"
                onclick="history.go(-1);">Go back</a></li>
              <li><a
                :href="href"
                class="text-muted">Home</a></li>
              <li><a
                class="text-muted"
                href="https://google.com/">Leave from here</a></li>
            </ul>
          </div>
        </div>
        <div class="links text-muted">
          <ul>
            <li><a
              class="text-muted"
              href="https://github.com/iSm1le">Developer</a></li>
            <li><a><b>Version:</b> {{ appVer }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from '../../package.json';

export default {
  name: 'Main',
  props: {
    host: {
      'type': String,
      'default': 'xaff.ru'
    },
    error: {
      'type': Number,
      'default': 0
    }
  },
  data() {
    return {
      isError: false,
      errorText: null,
      href: null
    };
  },
  computed: {
    appVer() {
      return version;
    }
  },
  created() {
    if (this.error > 0) {
      switch (this.error) {
      case 100:
        this.errorText = 'The server has received the request headers, and the client should proceed to send the request body';
        break;
      case 101:
        this.errorText = 'The requester has asked the server to switch protocols';
        break;
      case 103:
        this.errorText = 'Used in the resumable requests proposal to resume aborted PUT or POST requests';
        break;
      case 200:
        this.errorText = 'The request is OK (this is the standard response for successful HTTP requests)';
        break;
      case 201:
        this.errorText = 'The request has been fulfilled, and a new resource is created';
        break;
      case 202:
        this.errorText = 'The request has been accepted for processing, but the processing has not been completed';
        break;
      case 203:
        this.errorText = 'The request has been successfully processed, but is returning information that may be from another source';
        break;
      case 204:
        this.errorText = 'The request has been successfully processed, but is not returning any content';
        break;
      case 205:
        this.errorText = 'The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view';
        break;
      case 206:
        this.errorText = 'The server is delivering only part of the resource due to a range header sent by the client';
        break;
      case 300:
        this.errorText = 'A link list';
        break;
      case 301:
        this.errorText = 'The requested page has moved to a new URL';
        break;
      case 302:
        this.errorText = 'The requested page has moved temporarily to a new URL';
        break;
      case 303:
        this.errorText = 'The requested page can be found under a different URL';
        break;
      case 304:
        this.errorText = 'Indicates the requested page has not been modified since last requested';
        break;
      case 306:
        this.errorText = 'Switch proxy, bro';
        break;
      case 307:
        this.errorText = 'The requested page has moved temporarily to a new URL';
        break;
      case 308:
        this.errorText = 'Used in the resumable requests proposal to resume aborted PUT or POST requests';
        break;
      case 400:
        this.errorText = 'The request cannot be fulfilled due to bad syntax';
        break;
      case 401:
        this.errorText = 'The request was a legal request, but the server is refusing to respond to it';
        break;
      case 402:
        this.errorText = 'Payment required';
        break;
      case 403:
        this.errorText = 'The request was a legal request, but the server is refusing to respond to it';
        break;
      case 404:
        this.errorText = 'The requested page could not be found but may be available again in the future';
        break;
      case 405:
        this.errorText = 'A request was made of a page using a request method not supported by that page';
        break;
      case 406:
        this.errorText = 'The server can only generate a response that is not accepted by the client';
        break;
      case 407:
        this.errorText = 'The client must first authenticate itself with the proxy';
        break;
      case 408:
        this.errorText = 'The server timed out waiting for the request';
        break;
      case 409:
        this.errorText = 'The request could not be completed because of a conflict in the request';
        break;
      case 410:
        this.errorText = 'The requested page is no longer available';
        break;
      case 411:
        this.errorText = 'The "Content-Length" is not defined. The server will not accept the request without it';
        break;
      case 412:
        this.errorText = 'The precondition given in the request evaluated to false by the server';
        break;
      case 413:
        this.errorText = 'The server will not accept the request, because the request entity is too large';
        break;
      case 414:
        this.errorText = 'The server will not accept the request, because the URL is too long';
        break;
      case 415:
        this.errorText = 'The server will not accept the request, because the media type is not supported';
        break;
      case 416:
        this.errorText = 'The client has asked for a portion of the file, but the server cannot supply that portion';
        break;
      case 417:
        this.errorText = 'The server cannot meet the requirements of the Expect request-header field';
        break;
      case 500:
        this.errorText = 'A generic error message, given when no more specific message is suitable';
        break;
      case 501:
        this.errorText = 'The server either does not recognize the request method, or it lacks the ability to fulfill the request';
        break;
      case 502:
        this.errorText = 'The server was acting as a gateway or proxy and received an invalid response from the upstream server';
        break;
      case 503:
        this.errorText = 'The server is currently unavailable (overloaded or down)';
        break;
      case 504:
        this.errorText = 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server';
        break;
      case 505:
        this.errorText = 'The server does not support the HTTP protocol version used in the request';
        break;
      case 511:
        this.errorText = 'The client needs to authenticate to gain network access';
        break;
      default:
        this.errorText = 'Oh snap! Something is wrong :(';
        break;
      }
      this.isError = true;
    }
    this.href = `https://${this.host}`;
  }
};
</script>

<style lang="scss">
.main {
  background: #e2e2e2;
  min-height: 100%;

  ul {
    display: inline-block;
    font-size: .9rem;
    li {
      display: inline-block;
      list-style: none;
      a {
        text-decoration: none;
        /* color: lighten(#0e5977, 5%); */
        border-right: 2px solid #0e5977;
        display: block;
        padding: 0 7.5px;
        /* &:hover {
          color: lighten(#0e5977, 10%);
        }
        &:active {
          color: lighten(#0e5977, 10%);
        }
        &:visited {
          color: lighten(#0e5977, 5%);
        } */
      }
      &:last-child {
        a {
          border-right: 0 solid #0e5977;
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #0e5977;
  }

  p {
    color: #0e5977;
    font-size: 1.2rem;

    &.title {
      color: darken(#0e5977, 5%);
      text-transform: capitalize;
      font-size: 2.5rem;
    }

    &.title-sm {
      text-transform: lowercase;
      font-size: 1.75rem;
    }
  }

  img {
    max-width: 80%;
  }
}
</style>
