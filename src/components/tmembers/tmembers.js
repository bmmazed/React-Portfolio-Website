import React,{Component} from 'react';
import Mycard from '../card/mycard';
import Theader from '../tmembers/theader'
import '../tmembers/tmembers.css'

class Tmembers extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tmembers">
                <Theader />
                <Mycard />

            </div>
         );
    }
}
 
export default Tmembers;