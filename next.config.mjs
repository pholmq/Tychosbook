import nextra from 'nextra'

const withNextra = nextra({
  // This object MUST be empty or contain only valid v4 keys (like defaultShowCopyCode)
  // DO NOT put 'theme' or 'themeConfig' here.
})

export default withNextra({
  reactStrictMode: true,
})