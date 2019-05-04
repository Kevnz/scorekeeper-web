import React, { useState } from 'react'
import { Button } from 'react-form-elements'
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

  return (
    <main>
      <h1>ScoreKeeper</h1>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-6"
            onClick={() => {
              // setHomeScore(homeScore + 1)
            }}
          >
            <div className="card fluid">
              <Button
                onClick={() => {
                  setHomeScore(homeScore + 1)
                }}
              >
                {home}
              </Button>
            </div>
          </div>
          <div
            className="col-sm-6"
            onClick={() => {
              // setAwayScore(awayScore + 1)
            }}
          >
            <div className="card fluid">
              <Button
                onClick={() => {
                  setAwayScore(awayScore + 1)
                }}
              >
                {away}
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card fluid">{homeScore}</div>
          </div>
          <div className="col-sm-6">
            <div className="card fluid">{awayScore}</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <div className="card fluid">
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
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <Button
                disabled={secondQuarter.complete}
                onClick={() => {
                  if (secondQuarter.complete) return
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
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <Button
                disabled={thirdQuarter.complete}
                onClick={() => {
                  if (thirdQuarter.complete) return
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
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <Button
                disabled={fourthQuarter.complete}
                onClick={() => {
                  if (fourthQuarter.complete) return
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {firstQuarter.quarter.home} vs {away}:{' '}
                {firstQuarter.quarter.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {secondQuarter.quarter.home} vs {away}:{' '}
                {secondQuarter.quarter.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {thirdQuarter.quarter.home} vs {away}:{' '}
                {thirdQuarter.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {fourthQuarter.quarter.home} vs {away}:{' '}
                {fourthQuarter.quarter.away}
              </small>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {firstQuarter.total.home} vs {away}:{' '}
                {firstQuarter.total.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {secondQuarter.home} vs {away}: {secondQuarter.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {thirdQuarter.home} vs {away}: {thirdQuarter.away}
              </small>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card fluid">
              <small>
                {home}: {fourthQuarter.home} vs {away}: {fourthQuarter.away}
              </small>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
