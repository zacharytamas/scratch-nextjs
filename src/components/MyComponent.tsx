import React, { Component } from 'react';

export class MyComponent extends Component {
  render() {
    return (
      <div>
        My component
        <p data-testid="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          obcaecati ducimus placeat, quibusdam eaque numquam fugiat
          necessitatibus qui corrupti nesciunt facilis quod. Eaque
          repellendus earum architecto sed saepe molestiae consectetur!
        </p>
      </div>
    );
  }
}
