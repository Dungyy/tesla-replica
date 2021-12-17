import React from 'react'
import {Wrap, ItemText, ButtonGroup, LeftButton, RightButton, DownArrow, Buttons} from './SectionStyles'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            
        </Wrap>
    )
}

export default Section
