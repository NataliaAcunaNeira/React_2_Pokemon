import './Contacto.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
 
  return (
    <div>
<h1>Selecciona un pokemon</h1>

<select className="Pokemones" data-show-subtext="true" data-live-search="true">
    <option value='' selected="true">Pokemones</option>
    <option value='charmander'>Charmander</option>
    <option value='bmw'>BMW</option>
    <option value='citroen'>Citroen</option>
    <option value='fiat'>Fiat</option>
    <option value='ford'>Ford</option>
    <option value='honda'>Honda</option>
    <option value='hyundai'>Hyundai</option>
    <option value='kia'>Kia</option>
    <option value='mazda'>Mazda</option>
</select>

<div className='formulario'>
<Form>
      <Button variant="primary" type="submit">
        Ver Detalle
      </Button>
    </Form>
</div>
    </div>
  )
}
export default Contacto