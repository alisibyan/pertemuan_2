import Layout from '../layout/layouts';
import Isi from '../komponen/isi';
import  Link  from 'next/link';


class Main extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
            <Layout>
            <div class="data">
            <section >
                <div id="Bioskop" class="view"><h2>HOODIE.IN</h2> <Link href="/proyek/bioskop"><a><strong>view all :</strong></a></Link></div>
            <div class="main_bioskop"> <center>
                <Isi link="/artikel/[kode]" as="/artikel/Sonic" img="/images/G-1.png" div="g_1" figure_class="bioskop_1" figcaption_class="" judul="HAY PETRIK" starting="Starting from" harga="Rp. 200.000" tanggal= "📆 23 Mar 2019-23 Apr 2019"  tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Star Wars" img="/images/G-1.png" div="g_2" figure_class="bioskop_1" figcaption_class="" judul="HAY PETRIK Wars" starting="Starting from" harga="Rp. 200.000" tanggal="📆 23 Mar 2019-23 Apr 2019"  tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Mulan" img="/images/G-1.png" div="g_3" figure_class="bioskop_1" figcaption_class="" judul="HAY PETRIK" starting="Starting from" harga="Rp. 200.000" tanggal="📆 23 Mar 2019-23 Apr 2019"  tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Jumanji" img="/images/G-1.png" div="g_4" figure_class="bioskop_1" figcaption_class="" judul="HAY PETRIK" starting="Starting from" harga="Rp. 200.000" tanggal="📆 23 Mar 2019-23 Apr 2019" tempat="📌 banyuwangi"/>
                </center>
            </div>
            <div id="Festival" class="view"><h2>KAOS.IN</h2> <Link href="/proyek/festival"><a><strong>view all :</strong></a></Link></div>
            <div class="main_festival">  <center>
                <Isi link="/artikel/[kode]" as="/artikel/DWP X" img="/images/k-1.png" div="g_1" figure_class="bioskop_1" figcaption_class="" judul="DWP X" starting="Starting from" harga="Rp. 135.000" tanggal="📆 23 Mar 2019-23 Apr 2019" jam="🕚 09:00 - 21:00" tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Indonesia Nostalgia Festival" img="/k-1.png" div="g_2" figure_class="bioskop_1" figcaption_class="" judul="Indonesia Nostalgia Festival" starting="Starting from" harga="Rp. 200.000" tanggal="📆 23 Mar 2019-23 Apr 2019" jam="🕚 09:00 - 21:00" tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Music Festival 1" img="/images/k-1.png" div="g_3" figure_class="bioskop_1" figcaption_class="" judul="Music Festival 1" starting="Starting from" harga="Rp. 150.000" tanggal="📆 23 Mar 2019-23 Apr 2019" jam="🕚 09:00 - 21:00" tempat="📌 banyuwangi"/>
                <Isi link="/artikel/[kode]" as="/artikel/Music Festival 2" img="/images/k-1.png" div="g_4" figure_class="bioskop_1" figcaption_class="" judul="Music Festival 2" starting="Starting from" harga="Rp. 150.000" tanggal="📆 23 Mar 2019-23 Apr 2019" jam="🕚 09:00 - 21:00" tempat="📌 banyuwangi"/>
                </center>
            </div>
            </section>
            
        
        </div>
        </Layout>
        )
    }
}

export default Main;