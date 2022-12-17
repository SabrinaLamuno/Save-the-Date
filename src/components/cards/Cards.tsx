import * as React from 'react'
import Card from './Card'
import Form from './Form'


const array = [{
    header: 'Save The Date',
    message: '¡Estamos muy emocionados por que sean parte de un día tan especial en nuestras vidas!',
    image: '/Save-the-Date/images/save-the-date-1.JPG'
},
{
    header: 'Gift Giving',
    message: 'Poder verlos a todos este día es el mejor regalo que nos pueden dar. Sin embargo, si desean obsequiarnos un regalo de bodas adicional, agradecemos que sea una contribución monetaria ya que vivimos en el extranjero! ',
    ps: 'Si desean hacerlo, pueden hacerlo a través de este',
    linkDePago: 'https://paypal.me/demianysabrina',
    image: '/Save-the-Date/images/save-the-date-2.JPG'
},
{
    header: 'This is an UNPLUGGED wedding!',
    message: 'Para nosotros es muy importante disfrutar el momento, por lo que pedimos que en la ceremonia, entrada de la novia y First Dance, ¡NO utilicemos celulares! Queremos que vivas el momento con nosotros y no a través de tu lente.',
    ps: 'Habrán muchos fotógrafos ese día y compartiremos las fotos con todos!',
    image: '/Save-the-Date/images/save-the-date-4.JPG'
},
{
    header: 'Y el paso más importante... ¡Tu RSVP!',
    message: '¡Por favor haznos saber si contamos con tu presencia ese día!',
    isRSVP: true,
    image: '/Save-the-Date/images/save-the-date-ultima.jpg'
},
{
    header: '¡Nos vemos el 11 de febrero!',
    message: 'See you at the altar!',
    image: '/Save-the-Date/images/save-the-date-6.jpg'
}]

export default function Cards() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const handleNext = () => {
        if (activeStep === array.length - 1) {
            setIsLastStep(true);
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handlePrev = () => {
        if (activeStep === 0) {
            setIsFirstStep(true);
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return <>
        {array.map((card, index) => {
            return (activeStep === index && card.isRSVP && <Form onClickPrev={handlePrev} onSubmit={handleNext}
            header={card.header} message={card.message} image={card.image}/>)
        })}
        {activeStep === 0 && array.map((card, index) => {
            return (activeStep === index && <Card header={card.header} message={card.message}
                ps={card.ps} onClickNext={handleNext} image={card.image} linkDePago={card.linkDePago}/>)
        })}
        {activeStep === array.length - 1 && array.map((card, index) => {
            return (activeStep === index && <Card header={card.header} message={card.message}
                ps={card.ps} onClickPrev={handlePrev} image={card.image} linkDePago={card.linkDePago}/>)
        })}
        {
            array.map((card, index) => {
                return (activeStep === index && <Card header={card.header} message={card.message}
                    ps={card.ps} onClickNext={handleNext} onClickPrev={handlePrev} image={card.image} linkDePago={card.linkDePago}/>)
            })
        }
    </>
}