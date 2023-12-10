import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export function PointsTable(){
    return (
      <Container >
    <div className='mt-4 table mt-5 align-items-center w-80 border py-2'>
    <div style={{backgroundColor:'gold',width:'50%'}}><h1 style={{textAlign:'center', fontFamily:'poppins'}}>MMPL 2023</h1></div>
    <div style={{ backgroundColor: 'gold', width: '50%', marginLeft: 'auto', textAlign: 'center' }}>
  <h1 style={{ fontFamily: 'poppins' }}>POINTS TABLE</h1>
</div>
    <table className="table ">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Pos</th>
                  <th scope="col">Team</th>
                  <th scope="col">Played</th>
                  <th scope="col">Wins</th>
                  <th scope="col">Lost</th>
                  <th scope="col">Tie</th>
                  <th scope="col">Points</th>
                  <th scope="col">Run rate</th>
                 </tr>
                        
              </thead>
              <tbody >
                <tr>
                  <th scope="row">1</th>
                  <td>Gujarat Titans</td>
                  <td>14</td>
                  <td>10</td>
                  <td>4</td>
                  <td>0</td>
                  <td>20</td>
                  <td>2.18</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Chennai Super Kings</td>
                  <td>14</td>
                  <td>8</td>
                  <td>6</td>
                  <td>0</td>
                  <td>16</td>
                  <td>1.18</td>            
                </tr>
                <tr >
                  <th scope="row">3</th>
                  <td>Mumbai Indians</td>
                  <td>14</td>
                  <td>8</td>
                  <td>6</td>
                  <td>0</td>
                  <td>16</td>
                  <td>1.14</td>            </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Lucknow Super Giants</td>
                  <td>14</td>
                  <td>7</td>
                  <td>7</td>
                  <td>0</td>
                  <td>14</td>
                  <td>2.18</td>            </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Royal Challengers Bangalore</td>
                  <td>14</td>
                  <td>6</td>
                  <td>7</td>
                  <td>0</td>
                  <td>12</td>
                  <td>0.75</td>            </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Rajasthan Royals</td>
                  <td>14</td>
                  <td>6</td>
                  <td>7</td>
                  <td>0</td>
                  <td>12</td>
                  <td>1.20</td>            </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Delhi Capitals</td>
                  <td>14</td>
                  <td>5</td>
                  <td>9</td>
                  <td>0</td>
                  <td>10</td>
                  <td>1.78</td>                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Punjab Kings</td>
                  <td>14</td>
                  <td>5</td>
                  <td>9</td>
                  <td>0</td>
                  <td>10</td>
                  <td>0.18</td>                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Kolkata Knight Riders</td>
                  <td>14</td>
                  <td>4</td>
                  <td>10</td>
                  <td>0</td>
                  <td>8</td>
                  <td>0.76</td>                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Sunrisers Hyderabad</td>
                  <td>14</td>
                  <td>3</td>
                  <td>11</td>
                  <td>0</td>
                  <td>6</td>
                  <td>0.97</td>                </tr>
              </tbody>
            </table>
            </div>
            </Container>
  )
}