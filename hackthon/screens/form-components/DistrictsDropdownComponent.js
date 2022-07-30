import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from 'react-native'

const states = [
    {label : "AC" , value : "AC"},
    {label : "AL" , value : "AL"},
    {label : "AP" , value : "AP"},
    {label : "AM" , value : "AM"},
    {label : "BA" , value : "BA"},
    {label : "CE" , value : "CE"},
    {label : "DF" , value : "DF"},
    {label : "ES" , value : "ES"},
    {label : "GO" , value : "GO"},
    {label : "MA" , value : "MA"},
    {label : "MT" , value : "MT"},
    {label : "MS" , value : "MS"},
    {label : "MG" , value : "MG"},
    {label : "PA" , value : "PA"},
    {label : "PB" , value : "PB"},
    {label : "PR" , value : "PR"},
    {label : "PE" , value : "PE"},
    {label : "PI" , value : "PI"},
    {label : "RJ" , value : "RJ"},
    {label : "RN" , value : "RN"},
    {label : "RS" , value : "RS"},
    {label : "RO" , value : "RO"},
    {label : "RR" , value : "RR"},
    {label : "SC" , value : "SC"},
    {label : "SP" , value : "SP"},
    {label : "SE" , value : "SE"},
    {label : "TO" , value : "TO"},
]


const DistrictDropdown = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(states);

    return (
    <>
    <Text>UF:</Text>
    <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        dropDownDirection="TOP"
        searchTextInputProps={{
            maxLength: 25
        }}
        containerStyle={{
            width: "20%",
        }} />
    </>
    )
}

export default DistrictDropdown

