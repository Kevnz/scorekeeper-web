import React, { useState, useReducer } from 'react'
import {
  Section,
  Title,
  SubTitle,
  Container,
  Box,
  Button,
  Columns,
  Column,
  Card,
} from '@brightleaf/elements'
import reducer from '../reducers'

export default () => {
  const [home, setHome] = useState('Home')
  const [away, setAway] = useState('Away')
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const defaultQuarter = {
    total: {
      home: 0,
      away: 0,
    },
    quarter: {
      home: 0,
      away: 0,
    },
    complete: false,
  }
  const [firstQuarter, setFirstQuarter] = useState(defaultQuarter)
  const [secondQuarter, setSecondQuarter] = useState(defaultQuarter)
  const [thirdQuarter, setThirdQuarter] = useState(defaultQuarter)
  const [fourthQuarter, setFourthQuarter] = useState(defaultQuarter)
  const [state, dispatch] = useReducer(reducer, {
    home: 0,
    away: 0,
    currentQuarter: null,
    quarters: {
      first: {},
      second: {},
      third: {},
      fourth: {},
    },
  })
  console.log(state)
  return (
    <main>
      <Container>
        <Columns className="row">
          <Column
            isOneHalf
            onClick={() => {
              // setHomeScore(homeScore + 1)
            }}
          >
            <Box>
              <Button
                onClick={() => {
                  setHomeScore(homeScore + 1)
                  dispatch({ type: 'score.home' })
                }}
              >
                {home}
              </Button>
            </Box>
          </Column>
          <Column isOneHalf>
            <Box className="card fluid">
              <Button
                onClick={() => {
                  setAwayScore(awayScore + 1)
                  dispatch({ type: 'score.away' })
                }}
              >
                {away}
              </Button>
            </Box>
          </Column>
        </Columns>
        <Columns className="row">
          <Column isOneHalf>
            <Box>{homeScore}</Box>
          </Column>
          <Column isOneHalf>
            <Box>{awayScore}</Box>
          </Column>
        </Columns>
        <hr />
        <Columns className="row">
          <Column isOneQuarter>
            <Box>
              <Button
                disabled={firstQuarter.complete}
                onClick={() => {
                  if (firstQuarter.complete) return
                  setFirstQuarter({
                    quarter: {
                      home: homeScore,
                      away: awayScore,
                    },
                    total: {
                      home: homeScore,
                      away: awayScore,
                    },
                    complete: true,
                  })
                }}
              >
                1st
              </Button>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <Button
                disabled={secondQuarter.complete}
                onClick={() => {
                  if (secondQuarter.complete) return
                  if (!firstQuarter.complete) return

                  setSecondQuarter({
                    total: {
                      home: homeScore,
                      away: awayScore,
                    },
                    quarter: {
                      home: homeScore - firstQuarter.total.home,
                      away: awayScore - firstQuarter.total.away,
                    },
                    home: homeScore,
                    away: awayScore,
                    complete: true,
                  })
                }}
              >
                2nd
              </Button>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <Button
                disabled={thirdQuarter.complete}
                onClick={() => {
                  if (thirdQuarter.complete) return
                  if (!firstQuarter.complete) return
                  if (!secondQuarter.complete) return

                  setThirdQuarter({
                    total: {
                      home: homeScore,
                      away: awayScore,
                    },
                    quarter: {
                      home: homeScore - secondQuarter.total.home,
                      away: awayScore - secondQuarter.total.away,
                    },
                    home: homeScore,
                    away: awayScore,
                    complete: true,
                  })
                }}
              >
                3rd
              </Button>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <Button
                disabled={fourthQuarter.complete}
                onClick={() => {
                  if (fourthQuarter.complete) return
                  if (!firstQuarter.complete) return
                  if (!secondQuarter.complete) return
                  if (!thirdQuarter.complete) return

                  setFourthQuarter({
                    total: {
                      home: homeScore,
                      away: awayScore,
                    },
                    quarter: {
                      home: homeScore - thirdQuarter.total.home,
                      away: awayScore - thirdQuarter.total.away,
                    },
                    home: homeScore,
                    away: awayScore,
                    complete: true,
                  })
                }}
              >
                4th
              </Button>
            </Box>
          </Column>
        </Columns>
        <Columns className="row">
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {firstQuarter.quarter.home} vs {away}:{' '}
                {firstQuarter.quarter.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {secondQuarter.quarter.home} vs {away}:{' '}
                {secondQuarter.quarter.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {thirdQuarter.quarter.home} vs {away}:{' '}
                {thirdQuarter.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {fourthQuarter.quarter.home} vs {away}:{' '}
                {fourthQuarter.quarter.away}
              </small>
            </Box>
          </Column>
        </Columns>
        <hr />
        <Columns className="row">
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {firstQuarter.total.home} vs {away}:{' '}
                {firstQuarter.total.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box className="card fluid">
              <small>
                {home}: {secondQuarter.home} vs {away}: {secondQuarter.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {thirdQuarter.home} vs {away}: {thirdQuarter.away}
              </small>
            </Box>
          </Column>
          <Column isOneQuarter>
            <Box>
              <small>
                {home}: {fourthQuarter.home} vs {away}: {fourthQuarter.away}
              </small>
            </Box>
          </Column>
        </Columns>
      </Container>
    </main>
  )
}
