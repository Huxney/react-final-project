import React from "react";
import Trivia from "./trivia";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operation: "simplify",
      expression: "",
      result: "",
      trivia: false,
    };
  }

  calculate() {
    this.setState({ trivia: false });

    fetch(
      `https://newton.now.sh/api/v2/${
        this.state.operation
      }/${encodeURIComponent(this.state.expression)}`
    )
      .then((value) => value.json())
      .then((value) =>
        this.setState({
          result: value["result"],
        })
      );
  }

  resetInput() {
    document.querySelector("#expression").focus();
    document.querySelector("#expression").value = "";
    document.querySelector("#expression").innerHTML = "";

    this.setState({ expression: "", result: "" });
  }

  render() {
    return (
      <section>
        <select
          name="operation"
          onChange={(event) =>
            this.setState({ operation: event.target.value, result: "" })
          }
        >
          <option value="simplify">Simplify</option>
          <option value="factor">Factor</option>
          <option value="derive">Derive</option>
          <option value="integrate">Integrate</option>
          <option value="zeroes">Find 0's</option>
          <option value="tangent">Find Tangent</option>
          <option value="area">Area Under Curve</option>
          <option value="cos">Cosine</option>
          <option value="sin">Sine</option>
          <option value="tan">Tangent</option>
          <option value="arccos">Inverse Cosine</option>
          <option value="arcsin">Inverse Sine</option>
          <option value="arctan">Inverse Tangent</option>
          <option value="abs">Absolute Value</option>
          <option value="log">Logarithm</option>
        </select>
        <input
          id="expression"
          type="text"
          onChange={(event) =>
            this.setState({ expression: event.target.value })
          }
        />
        <button className="btn btn-primary" onClick={() => this.calculate()}>
          Calculate
        </button>
        {this.state.result === "" ? (
          <p style={{ padding: "24px" }}>Awaiting result...</p>
        ) : (
          <>
            <strong
              style={{ padding: "24px", display: "block" }}
            >{`Result of operation #${this.state.operation}: ${this.state.result}`}</strong>

            {this.state.expression !== "" && (
              <button
                className="btn btn-secondary"
                onClick={() => this.setState({ trivia: true })}
              >
                Trivia
              </button>
            )}

            {this.state.trivia && (
              <Trivia
                interactive={false}
                query={this.state.result}
                disappearAfter={7500}
                onComplete={() => this.resetInput()}
              />
            )}
          </>
        )}
      </section>
    );
  }
}

export default Calculator;
