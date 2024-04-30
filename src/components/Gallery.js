import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Gambar1 from "../assets/image/gallery/1.jpg"
import Gambar2 from "../assets/image/gallery/2.jpg"
import Gambar3 from "../assets/image/gallery/3.jpg"
import Gambar4 from "../assets/image/gallery/4.jpg"
import Gambar5 from "../assets/image/gallery/5.jpg"
import Gambar6 from "../assets/image/gallery/6.jpg"

const Gallery = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-item-center" id="Papan Prestasi">
      <Container>
      <div className='mask' style={{backgroundColor: 'black'}} >
        <div className='d-flex justify-content align-items-center h-100'>
          <Col className='text-center text-white'>
        <h2>Papan Prestasi</h2>
          </Col>
        </div>
      </div>
        <Row className= "row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-5 pt-100 w-1000">
          <Col>
            <img src={Gambar1} alt="gambar" className="w-100"/>
            <p></p>
            <h6>Juara 2 Lintang Piscesa (XII IPS 2), Meila Amanda Fitri (XII IPS 2), 
              Nabila Nu ris Sakinah (XII IPS 2), Bulan Mulyana Riska (XI MIPA 4) Lomba Nasyid Pentas 
              PAI Jenjang SMA - SMK Tingkat Provinsi Jawa Timur - MGMP PAI Provinsi Jawa Timur Juara 2 
              Lintang Piscesa Cevi Atsila (XII IPS 2) , Meila Amanda Fitri (XII IPS 2), Nabila Nu ris Sakinah 
              (XII IPS 2), Bulan Mulyana Riska (XI MIPA 4) Lomba Nasyid Pentas PAI Jenjang SMA - SMK Tingkat 
              Provinsi Jawa Timur - MGMP PAI Provinsi Jawa Timur.</h6>
          </Col>
          <Col>
            <img src={Gambar2} alt="gambar" className="w-100"/>
            <p></p>
            <h6>Hendra Dwi Permana peraih medali Emas mapel 
                Ekonomi UNTAG SCIENCE COMPETITION 2023 SE JAWA Dan Bali</h6>
          </Col>
          <Col>
            <img src={Gambar3} alt="gambar" className="w-100"/>
            <p></p>
            <h6>JUARA 2 GERAK JALAN SMA/SMK/MA Kec. Rogojampi Tahun 2023 Kategori Putri.</h6>
          </Col>
          <Col>
            <img src={Gambar4} alt="gambar" className="w-100"/>
            <p></p>
            <h6>JUARA 5 GERAK JALAN SMA/SMK/MA Kec. Rogojampi Tahun 2023 Kategori Putri.</h6>
          </Col>
          <Col>
            <img src={Gambar5} alt="gambar" className="w-100"/>
            <p></p>
            <h6>JUARA 3 GERAK JALAN SMA/SMK/MA Kec. Rogojampi Tahun 2023 Kategori Putri	</h6>
          </Col>
          <Col>
            <img src={Gambar6} alt="gambar" className="w-100"/>
            <p></p>
            <h6>BIMA MAULANA dan ARADEA DIVANA TRIXI perwakilan KWARCAB JATIM dan BANYUWANGI 
              di RAIMUNA NASIONAL XII Tahun 2023</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery