import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // Event handler ini akan mempassing reference
    // melalui props <onDelete> ke child component yaitu counter.jsx
    /* console.log("Event Handler Called", counterId); */
    // ini adalah event handler untuk mengubah (menghapus) array pada state
    // STATE HANYA DAPAT DIUBAH didalam komponen tempat state itu berada
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
