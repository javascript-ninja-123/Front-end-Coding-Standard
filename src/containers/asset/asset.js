import React,{Component} from 'react';
import styled from 'styled-components';
import {compose} from 'redux';
import {connect} from 'react-redux';
//import dumb component
import {WithTemeLeftBar,SearchBar} from '../../components';
//import action creator
import {changeInputValue} from '../../actions';


//styled component
const AssetWrapper = styled.div`
  display:flex;
  width:100vw;
`

class Asset extends Component {
    onChange = (e) => this.props.changeInputValue(e.target.value)
    render() {
        const {inputValue} = this.props;
        return (
            <AssetWrapper>
              <WithTemeLeftBar flex='20%' background='#58a5f0'/>
              <div style={{flex:"1"}}>
              <SearchBar placeholder='serach anything...' value={inputValue} onChange={this.onChange}/>
              </div>
            </AssetWrapper>
        );
    }
}

const  mapStateToProps = ({assets}) => {
  const {inputValue} = assets;
  return{inputValue}
}

export default connect(mapStateToProps, {changeInputValue})(Asset)
