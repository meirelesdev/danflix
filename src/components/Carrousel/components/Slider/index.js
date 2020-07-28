import React from 'react'
import SlickSlider from 'react-slick'
import styled from 'styled-components'

const Container = styled.ul`
    padding:0;
    margin:0;
       
.slick-prev, .slick-next {
    z-index: 50;
    
    top: 0;
    bottom: 0;
    /* margin auto; */
    width: 50px;
    height: 100%;
    transform: initial;
    &:before {
        font-size: 40px;
    }
}
.slick-prev {
    left: 0px;

}
.slick-next {
    right: 16px;
}
`
export const SliderItem = styled.li`
    margin-right:16px;
   
    img{
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
    
`

const Slider = ({ children }) => (
    <Container>
        <SlickSlider {...{
            dots: false,
            infinit: true,
            speed: 500,
            autoplay:true,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true,

            // PARACOLOCAR DOTS DE NAVEGAÇÃO
            // appendDots: dots => (
            //     <div style={{
            //         // backgroundColor: "#f00",
            //         borderRadius: "10px",
            //         padding:"10px"
            //     }}>
            //         <ul style={{ margin:"0px"}}>{dots}</ul>
            //     </div>
            // ), 
            // customPaging: i => (
            //     <div
            //       style={{
            //         width: "30px",
            //         color: "blue",
            //         border: "1px blue solid"
            //       }}
            //     >
            //       {i + 1}
            //     </div>
            //   )
        }}
        >
            {children}
        </SlickSlider>
    </Container>
)
export default Slider