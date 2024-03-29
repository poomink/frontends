import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

import { useWeb3Context } from "@/contexts/Web3ContextProvider"
import useConnectWallet from "@/hooks/useConnectWallet"
import { truncateAddress } from "@/utils"

const Description = styled(Typography)(({ theme }) => ({
  maxWidth: "61rem",
  margin: "0 auto 7.5rem",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "transparent",
  },
}))

const AccountBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "8rem",
}))

const Header = () => {
  const { walletCurrentAddress } = useWeb3Context()
  const connectWallet = useConnectWallet()
  return (
    <Box className="mx-auto">
      <AccountBox>
        {walletCurrentAddress ? (
          <Button className="w-[178px] pointer-events-none">{truncateAddress(walletCurrentAddress as string)}</Button>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </AccountBox>
      <Typography variant="h3" align="center" sx={{ marginBottom: "1.2rem" }}>
        Rollup Explorer
      </Typography>
      <Description variant="body1" color="textSecondary" align="center">
        Track the status of blocks and transactions as they are committed and finalized.
      </Description>
    </Box>
  )
}

export default Header
