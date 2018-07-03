import React,{Component} from 'react';
import styled from 'styled-components';
import {compose} from 'redux';
import {connect} from 'react-redux';

//import dumb component
import {WithTemeLeftBar,SearchBar,Grid} from '../../components';
import {WithLoader} from '../../hocs';
import {withModification,withSearchInput} from '../../recomposes'
import {promisify} from '../../utils';
//import action creator
import {changeInputValue,fetchData,searchInput} from '../../actions';



//styled component
const AssetWrapper = styled.div`
  display:flex;
  width:100vw;
`,
  ContentWrapper = styled.div`
    flex:1;
  `,
  ModifiedGrid = withModification(Grid)

class Asset extends Component {
    state = {
      inputValue:''
    }
    componentDidMount() {
      this.props.fetchData();
    }
    onChange = async (e) => {
      const text = e.target.value;
      this.setState({inputValue:text})
    }
    renderGrid = (data) => {
      const {inputValue} = this.state;
      if(inputValue === ''){
        return <ModifiedGrid data={data}/>
      }
      else{
        const SearchGrid =  withSearchInput(inputValue)(Grid)
        return <SearchGrid data={data}/>
      }
    }
    render() {
        const {inputValue,data} = this.props;
        return (
            <WithLoader text='fetching data...' loadingReason={data.length <=0}>
              <AssetWrapper>
                <WithTemeLeftBar flex='20%' background='#58a5f0'/>
                <ContentWrapper>
                <SearchBar placeholder='serach anything...' value={this.state.inputValue} onChange={this.onChange}/>
                {this.renderGrid(data)}
                </ContentWrapper>
              </AssetWrapper>
            </WithLoader>
        );
    }
}

const  mapStateToProps = ({assets}) => {
  const {inputValue,error,loading,data} = assets;
  return{inputValue,error,loading,data}
}

const assetConnecter = connect(mapStateToProps, {changeInputValue,fetchData,searchInput})

export default assetConnecter(Asset)
