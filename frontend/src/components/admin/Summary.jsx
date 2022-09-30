import React from 'react'
import styled from 'styled-components'
import {FaUsers, FaChartBars, FaClipboard} from 'react-icons/fa'
const Summary = () => {

  const data = [
    {
      icons: <FaUsers />,
      digits:50,
      isMoney:false,
      title:"users",
      color:"rgb(102,100,255)",
      bgColor:"rgb(102,100,255,0.12)",
      percentage:30
    },
    {
      icons: <FaClipboard />,
      digits:50,
      isMoney:false,
      title:"users",
      color:"rgb(38,198,255)",
      bgColor:"rgb(102,100,255,0.12)",
      percentage:30
    },
    {
      icons: <FaUsers />,
      digits:50,
      isMoney:false,
      title:"users",
      color:"rgb(102,130,233)",
      bgColor:"rgb(102,100,255,0.12)",
      percentage:30
    },
  ]
  return (
    <StyledSummary>
      <MainStats>
      <Title>
        <h2>Overview</h2>
        <p>How your shop is performing </p>
      </Title>
      <WidgetWrapper>
        
      </WidgetWrapper>
      <SideStats>

      </SideStats>

      </MainStats>
    </StyledSummary>
  )
}

export default Summary;

const StyledSummary = styled.div`
width: 100%;
display: flex;
`

const MainStats = styled.div`
flex:2;
width: 100%;
`

const Title = styled.div`
p{
  font-size: 14px;
  color: gray;
}

`
const Overview = styled.div`
background:rgb(48,58,78);
color: rgb(234,234,255,0.87);
padding: 1.5rem;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const WidgetWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const SideStats = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin-left: 2rem;
width: 100%;
`