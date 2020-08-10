import Link from 'next/link';

class Home extends React.Component{

    render(){
        return(
        <div class="primary">
           
        <header class= "nav">
            <Header/> 
        
        <div class="navbar">
            <Nav/>
        </div>
        </header>
    </div>
        )}
    }

  
class Header extends React.Component{

render(){
    return(
        <div class="header_left">
        <div class ="logo">
        <img src="/images/AB-LOGO.png" /></div>
        </div>
    )

    }
}

class Nav extends React.Component {
        state = {
            click: false
        }

        render(){
            return(
                <div class="header_right">
                    <a class="navbar_tombol" onClick={() => {this.setState({ click: !this.state.click })}}>≡</a>
                    {this.state.click ? <Isi_nav /> : null}
                </div>
            );
        }
    }

  
    function Li2(props){
        return (
            <div class={props.div}>
            <li> <Link href= {props.link} ><a> {props.text} </a></Link> </li></div>
        )
    }
    function Select(props){
        return (
    
            <option value={props.value}>{props.text}</option>
        )
    }
    class Isi_nav extends React.Component{
        render(){
                return(
                    <nav>
                    <div class="navbar_isi">
                        <ul>
                                <Li2 link="/index" text="Home" />
                                <Li2 link="/proyek/bioskop" text="HOODIE" />
                                <Li2 link="/proyek/festival" text="VAVORIT" />
                                <Li2 link="#contact" text="FAQ"/>
                         </ul>
                            <select >
                                <Select value="" text="All"/>
                                <Select value="" text="Hoodie"/>
                                <Select value="" text="Sepatu"/>
                                <Select value="" text="Kaos"/>
                            </select>
                    </div>
                    </nav>
                );
            }
    
    }

    export default Home;