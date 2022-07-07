export const formatName = (name: string) => {
    return name.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
    // return name.toUpperCase()
}