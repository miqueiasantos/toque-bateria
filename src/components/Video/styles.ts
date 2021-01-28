import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  padding-bottom: 56.25%;
`

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
