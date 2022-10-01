import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFinger = class extends React.Component {
  render() {
    const {parent, playable, finger} = this.props;
    return (
      <div>
        {finger ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <div>
        Please show your finger.
        </div>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger(5)}
        >5</button>
      </div>
    );
  }
}

exports.GetNumber = class extends React.Component {
  render() {
    const {parent, playable, number} = this.props;
    return (
      <div>
        {number ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <div>
        Please guess the total fingers.
        </div>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(5)}
        >5</button>
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(6)}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(7)}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(8)}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(9)}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.playNumber(10)}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;