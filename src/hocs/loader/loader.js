import React,{Component} from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import './loader.css';

const LOADER = ({text}) => (
  <div className="Loader">
  <Segment>
     <Dimmer active inverted>
       <Loader inverted content={text || 'loading'} />
     </Dimmer>

     <Image src='/images/wireframe/short-paragraph.png' />
   </Segment>
 </div>
)

export const WithLoader = ({text,loadingReason,children}) => {
  if(loadingReason){
    return <LOADER text={text}/>
  }
  return (
      <div>
        {children}
      </div>
  );
}
