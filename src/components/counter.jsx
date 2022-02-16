import React, { Component } from "react";
class Counter extends Component {
  // state = { value: this.props.counter.value };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags !</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li> // cara merender list item diReact
  //       ))}
  //     </ul>
  //   );
  // }
  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // Syntax diatas adalah cara untuk mengupdate state (this.setstate)
  // dengan membawa seluruh properti yang dimiliki oleh state tersebut
  // };

  render() {
    //    let classes = this.getBadgeClassess();
    // Syntax diatas ini dipanggil langusung dengan memasukan syntax
    // this.getbadgeclassess didalam tag span

    //console.log("props", this.props);
    // Syntax diatas ini dipanggil untuk mengecek nilai attribute dari
    //component counters.jsx yang dimasukkan / tampung kedalam PROPS
    return (
      <div className="Row">
        <div className="col-1">
          {" "}
          <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)} // cara passing event argument
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)} // cara passing event argument
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : null}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            // Raising sebuah even ke parent component (counters.jsx)
            // melalui sebuah props onDelete
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }
  getBadgeClassess() {
    // baris ini adalah hasil refactoring (encapsulation)
    let classes = "badge sm m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
    // Jika nilai count = 0 maka badge akan berwarna kuning,
    // sebaliknya berwarna biru.
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
