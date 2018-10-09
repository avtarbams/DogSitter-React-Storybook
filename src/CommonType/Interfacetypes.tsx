
export default interface InterfaceTypes {
    /**
     * This field is for giving title to component
     */
    name?: string
    /**
     * Classname to component or to it's parent div
     */
    className?: string
    /**
     * To show red border when error
     */
    required?: boolean
    /**
     * whether the field is enabled/disabled
     */
    disabled?: boolean
    /**
     * the message to display in tooltip when error
     */
    errorMessage?: string
    /**
     * to hide/show tooltip
     */
    showTooltip?: boolean
    /**
     * Header title for the card
     */
    title?: string

    /**
     * Light for the light background
     */
    type?: string

    /**
     * Subtitle
     */
    subtitle?: string

     /**
     * Card color for the card
     */
    value?: string
    /**
     * Value of the text
     */
    cardColor?:any;
    /**
     * Card with or without HR line
     */
    imageurl?: any;
    /**
     * Card with image url
     */
    lineRequired?: boolean;

    borderGreen?: boolean;

    
}