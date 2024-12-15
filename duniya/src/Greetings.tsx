import React from 'react'

type GreetingsProps = {name : string};

/**
 * Greetings component that displays a greeting message.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name to be displayed in the greeting message.
 * @returns {JSX.Element} A heading element with the greeting message.
 *
 * @example
 * // Usage example:
 * <Greetings name="John" />
 * // Renders: <h1>Hello John</h1>
 */
const Greetings: React.FC<GreetingsProps> = ({name})=>{
    return <h1>Hello {name}</h1>
}
//React.FC is a generic type that takes the props object as a type argument. FC means FunctionComponent.
export default Greetings;

