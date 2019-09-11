import React, {Component} from 'react';
import {LoadingComponent} from "./loading";

export function ComponentWithLoading(WrappedComponent) {
  return class extends Component {
    render() {
      if (this.props.isLoading) {
        return <LoadingComponent/>;
      } else {
        return <WrappedComponent {...this.props}/>;
      }
    }
  };
}