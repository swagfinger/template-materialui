import {
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import React, { useState } from "react";

export const MuiCheckboxExample = () => {
  console.log("--------------------------------");
  const [acceptTerms, setAcceptTerms] = useState(false);
  console.log("acceptTerms: ", acceptTerms);

  const [skills, setSkills] = useState<string[]>([]);
  console.log("skills: ", skills);

  const [bookmark, setBookmark] = useState(false);
  console.log("bookmark: ", bookmark);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
  };

  const handleBookmark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookmark(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    //if not found
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      //else remove from array
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant='h5'>Basic checkbox</Typography>
        <Box>
          <FormControlLabel
            label='I accept terms and conditions'
            control={<Checkbox checked={acceptTerms} onChange={handleChange} />}
          />
        </Box>
        <Typography variant='h5'>Checkbox group</Typography>
        <Box>
          <FormControl error>
            <Stack spacing={2}>
              <FormLabel>Skills</FormLabel>
              <FormGroup>
                <FormControlLabel
                  label='HTML'
                  control={
                    <Checkbox
                      value='html'
                      checked={skills.includes("html")}
                      onChange={handleSkillChange}
                    />
                  }
                />
                <FormControlLabel
                  label='CSS'
                  control={
                    <Checkbox
                      value='css'
                      checked={skills.includes("css")}
                      onChange={handleSkillChange}
                    />
                  }
                />
                <FormControlLabel
                  label='Javascript'
                  control={
                    <Checkbox
                      value='javascript'
                      checked={skills.includes("javascript")}
                      onChange={handleSkillChange}
                    />
                  }
                />
              </FormGroup>
              <FormHelperText>Invalid Selection</FormHelperText>
              {/* row */}
              <FormGroup row>
                <FormControlLabel
                  label='HTML'
                  control={
                    <Checkbox
                      value='html'
                      checked={skills.includes("html")}
                      onChange={handleSkillChange}
                    />
                  }
                />
                <FormControlLabel
                  label='CSS'
                  control={
                    <Checkbox
                      value='css'
                      checked={skills.includes("css")}
                      onChange={handleSkillChange}
                    />
                  }
                />
                <FormControlLabel
                  label='Javascript'
                  control={
                    <Checkbox
                      value='javascript'
                      checked={skills.includes("javascript")}
                      onChange={handleSkillChange}
                    />
                  }
                />
              </FormGroup>
              <FormHelperText>Invalid Selection</FormHelperText>
            </Stack>
          </FormControl>
        </Box>

        <Typography variant='h5'>Icon checkbox</Typography>
        <Box>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={bookmark}
            onChange={handleBookmark}
          />
        </Box>
      </Stack>
    </Box>
  );
};
