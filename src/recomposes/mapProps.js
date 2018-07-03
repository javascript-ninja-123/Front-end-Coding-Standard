import React from 'react';
import {compose,mapProps} from 'recompose';


export const withFilter = (condition,result) => mapProps(
  ({data}) => (
    {
      result,
      list:data.reduce((acc,val) => {
        if(val[condition] === result){
          acc.push(val)
          return acc;
        }
        return acc;
      },[])
    }
  )
)


export const withModification = mapProps(
  ({data}) => (
    {
      data:data.reduce((acc,val,i) => {
        const newVal = {
          header:val.title,
          sub:val.completed,
          des:val.userId
        }
        acc[i] =newVal;
        return acc;
      },new Array(data.length))
    }
  )
)

export const withSearchInput = input => mapProps(
  ({data}) => ({
    data:data.reduce((acc,val) => {
      if(val.title.includes(input)){
        const newVal = {
          header:val.title,
          sub:val.completed,
          des:val.userId
        }
        acc.push(newVal);
        return acc;
      }
      return acc;
    },[])
  })
)
