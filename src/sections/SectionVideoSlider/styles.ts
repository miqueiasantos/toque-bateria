import styled from 'styled-components'

import { COLORS } from '~/styles/variables'

export const Container = styled.div`
  .carousel {
    .slide {
    }

    .carousel-status,
    .thumbs-wrapper {
      display: none;
    }

    &.carousel-slider {
      display: flex;
      align-items: center;
    }

    .slide {
      background-color: inherit;
      iframe {
        display: inherit;
        width: 100%;
        margin: 0;
      }
    }

    .control-dots {
      bottom: 50px;
      margin: 0;
      .dot {
        margin: 0 3px;
        height: 10px;
        width: 10px;
        opacity: inherit;
        box-shadow: inherit;
        background-color: #e4e4e4;
        outline: 0;
        &.selected,
        &:hover {
          background-color: #9f9f9f;
        }
      }
    }
  }
`

export const VideoLabel = styled.h3`
  margin-top: 54px;
  font-weight: 400;
  color: ${COLORS.textSecondary};
`
