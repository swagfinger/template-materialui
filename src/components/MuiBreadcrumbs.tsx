import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type MuiBreadcrumbsProps = {};

export const MuiBreadcrumbs: React.FC<MuiBreadcrumbsProps> = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNextIcon fontSize='small' />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline='hover' href='#'>
          Home
        </Link>
        <Link underline='hover' href='#'>
          Catalog
        </Link>
        <Link underline='hover' href='#'>
          Accessories
        </Link>
        <Link underline='hover' href='#'>
          Shoes
        </Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
