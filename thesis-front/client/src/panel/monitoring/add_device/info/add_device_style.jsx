import {css} from 'glamor';
import {columnHorizontallyCentered, rowVerticallyCentered} from "../../../../components/table/table_style";


export const totalFormContainerStyle = css(columnHorizontallyCentered, {width: '90%'});
export const deviceTypeContainerStyle = css(rowVerticallyCentered, {width: '30%'});
export const deviceTypeTextStyle = css({width: '40%', fontSize: '0.9em'});
export const deviceTypeDropDownContainerStyle = css({width: '60%', fontSize: '0.9em'});
export const authenticationDataContainerStyle = css({marginTop: '20px', width: '45%', border: '1px solid black'});