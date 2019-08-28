import React, {Component} from 'react';
import {css} from 'glamor';
import Menu from "../menu/menu";
import {MonitoringComponent} from "../MonitoringComponent";
import {SearchComponent} from "../SearchComponent";
import {ComponentWithLoading} from "../loading/loading_hoc";
import {LoadingComponent} from "../loading/loading";

const MAIN_HEADER_HEIGHT = 60;
const MAIN_HEADER_WIDTH = 60;

let panelContainer = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

let panelHeader = css({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: MAIN_HEADER_HEIGHT,
});

let headerLogo = css({
  display: 'flex',
  width: MAIN_HEADER_WIDTH,
  height: MAIN_HEADER_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5em',
  color: 'white',
  backgroundColor: '#AB4B52',
});

let headerTitle = css({
  width: `calc(100% - ${MAIN_HEADER_WIDTH}px)`,
  height: MAIN_HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px',
  color: 'white',
  fontSize: '1.15em',
  backgroundColor: '#904B52',
});

let panelBody = css({
  marginTop: MAIN_HEADER_HEIGHT,
  marginLeft: MAIN_HEADER_WIDTH,
  display: 'flex',
  width: `calc(100% - ${MAIN_HEADER_WIDTH}px)`,
});

let contentContainer = css({
  width: '100%',
  backgroundColor: '#eee',
  height: '1000px',
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
});

export class Panel extends Component {
  constructor() {
    super();
    this.state = {
      menuItemSelected: 0,
      isLoading: true,
    };
  }

  onItemClicked = (menuItemSelected) => {
    this.setState({menuItemSelected, isLoading: false});
  };

  render() {

    let container;

    if (this.state.menuItemSelected === 1) {
      container = <MonitoringComponent/>;
    } else if (this.state.menuItemSelected === 2) {
      container = <SearchComponent/>;
    } else {
      container = <LoadingComponent/>;
    }

    let ContainerWithLoading = ComponentWithLoading(() => {
      return <div className={contentContainer} id='ContentContainer'>
        {container}
      </div>;
    });

    return (
      <div className={panelContainer} id='MainPanelContainer'>
        <div className={panelHeader} id='MainPanelHeader'>
          <div className={headerLogo} id='HeaderLogo'>
            <i className={"fa fa-btc"} id='HeaderLogo'/>
          </div>
          <div className={headerTitle} id='HeaderTitle'>
            Monitoring Dashboard
          </div>
        </div>

        <div className={panelBody} id='PanelBody'>
          <Menu onItemClicked={this.onItemClicked}/>
          <ContainerWithLoading isLoading={this.state.isLoading}/>
        </div>
      </div>
    );
  }
}