import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <span className="symbol">{this.props.symbol}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}
