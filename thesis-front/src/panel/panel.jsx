import React, {Component} from 'react';
import {css} from 'glamor';
import Menu from "../components/menu/menu";
import {MonitoringPanelComponent} from "./monitoring/monitoring_panel";
import {SearchPanelComponent} from "./search/search_panel";
import {ComponentWithLoading} from "../components/loading/loading_hoc";
import {LoadingComponent} from "../components/loading/loading";

const MAIN_HEADER_HEIGHT = 60;
const MAIN_HEADER_WIDTH = 60;

const panelContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const panelHeaderStyle = css({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: MAIN_HEADER_HEIGHT,
});

const headerLogoStyle = css({
  display: 'flex',
  width: MAIN_HEADER_WIDTH,
  height: MAIN_HEADER_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5em',
  color: 'white',
  backgroundColor: '#AB4B52',
});

const headerTitleStyle = css({
  width: `calc(100% - ${MAIN_HEADER_WIDTH}px)`,
  height: MAIN_HEADER_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px',
  color: 'white',
  fontSize: '1.15em',
  backgroundColor: '#904B52',
});

const panelBodyStyle = css({
  marginTop: MAIN_HEADER_HEIGHT,
  marginLeft: MAIN_HEADER_WIDTH,
  display: 'flex',
  width: `calc(100% - ${MAIN_HEADER_WIDTH}px)`,
});

const contentContainerStyle = css({
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
      container = <MonitoringPanelComponent/>;
    } else if (this.state.menuItemSelected === 2) {
      container = <SearchPanelComponent/>;
    } else {
      container = <LoadingComponent/>;
    }

    let ContainerWithLoading = ComponentWithLoading(() => {
      return <div className={contentContainerStyle} id='ContentContainer'>
        {container}
      </div>;
    });

    return (
      <div className={panelContainerStyle} id='MainPanelContainer'>
        <div className={panelHeaderStyle} id='MainPanelHeader'>
          <div className={headerLogoStyle} id='HeaderLogo'>
            <i className={"fa fa-btc"} id='HeaderLogo'/>
          </div>
          <div className={headerTitleStyle} id='HeaderTitle'>
            Monitoring Dashboard
          </div>
        </div>

        <div className={panelBodyStyle} id='PanelBody'>
          <Menu onItemClicked={this.onItemClicked}/>
          <ContainerWithLoading isLoading={this.state.isLoading}/>
        </div>
      </div>
    );
  }
}