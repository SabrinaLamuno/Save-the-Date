import { useState, useEffect } from "react"
import {
    Card, CardContent, CardHeader, TextField, Radio, RadioGroup,
    FormControlLabel, FormControl, FormLabel, Select, MenuItem, Container,
    Button,
    CardActions,
    Typography,
    InputLabel
} from "@mui/material"
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';
import handleSubmit from '../../formHandles'

interface Props {
    header: string;
    message: string;
    onClickPrev: any;
    onSubmit: any;
    image?: string;
}

export default function Form(props: Props) {
    const [formName, setFormName] = useState("")
    const [rsvp, setRsvp] = useState("")
    const [foodRestrictions, setFoodRestrictions] = useState("")
    const [formReady, setFormReady] = useState(false)
    const [foodRestrictionsOpen, setFoodRestrictionsOpen] = useState(false)

    const { onClickPrev, onSubmit, header, message, image } = props

    useEffect(() => {
        if (formName !== "" && rsvp !== "") {
            setFormReady(true)
        } else {
            setFormReady(false)
        }
    }, [formName, rsvp, foodRestrictions])

    useEffect(() => {
        if (rsvp === "no") {
            setFoodRestrictionsOpen(false)
        } else {
            formName !== "" && rsvp === "yes" ? setFoodRestrictionsOpen(true) : setFoodRestrictionsOpen(false)
        }
    }, [rsvp, formName])

    const handleNameChange = (e: any) => {
        setFormName(e.target.value)
    }

    const handleRsvpChange = (e: any) => {
        setRsvp(e.target.value)
    }

    const handleFoodRestrictionsChange = (e: any) => {
        setFoodRestrictions(e.target.value)
    }

    const handleSubmitClick = () => {
        handleSubmit(formName, rsvp, [foodRestrictions])
        onSubmit()
    }

    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', minWidth: '100vw', backgroundImage: `url(${image})` }}>
            <StyledCard sx={{ minWidth: '35vw', minHeight: '35vh' }}>
                <CardHeader title="RSVP" />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {header}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {message}
                    </Typography>
                    <FormContainer>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={formName}
                            onChange={handleNameChange}
                        />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Are you coming?</FormLabel>
                            <StyledRadioGroup aria-label="rsvp" name="rsvp" value={rsvp} onChange={handleRsvpChange}>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </StyledRadioGroup>
                        </FormControl>
                        <InputLabel id="restrictions-label" sx={{ display: foodRestrictionsOpen ? 'block' : 'none' }}>
                            Food Restrictions
                        </InputLabel>
                        <Select
                            labelId="restrictions-label"
                            id="restrictions"
                            title="Food Restrictions"
                            value={foodRestrictions}
                            onChange={handleFoodRestrictionsChange}
                            sx={{ display: foodRestrictionsOpen ? 'block' : 'none' }}
                        >
                            <MenuItem value="none">Ninguna</MenuItem>
                            <MenuItem value="vegetarian">Vegetariana</MenuItem>
                            <MenuItem value="gluten-free">Gluten Free</MenuItem>
                            <MenuItem value="alcohol-free">Alcohol Free</MenuItem>
                            <MenuItem value="other">Otra</MenuItem>
                        </Select>
                    </FormContainer>
                    <ButtonContainer>
                        <StyledButton onClick={onClickPrev}>Back</StyledButton>
                        <StyledButton onClick={handleSubmitClick} disabled={!formReady}>Submit</StyledButton>
                    </ButtonContainer>
                </CardContent>
            </StyledCard>
        </Container>
    )
}


const FormContainer = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
        width: '100%',
        margin: '1rem',
    }
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: '#282c34',
    '&:hover': {
        backgroundColor: 'rgba(40, 44, 52, 0.15)',
    }
}));

const StyledCard = styled(Card)(({ theme }) => ({
    animation: `${keyframes({
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    })} 2.5s ease-in-out`,
}));

const ButtonContainer = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
}));
