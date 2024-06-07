import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";

const amaCitations = await (
    await fetch("citations.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
).json();

const Citations = (props) => {
    return (
        <Box
            className="citations"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: "5vh 10vw",
                wordWrap: "break-word",
            }}
        >
            <Typography variant="h1" mb={2}>
                References
            </Typography>

            <Stack>
                {Object.values(amaCitations).map((citation, index) => (
                    <Typography
                        key={`citation-${index + 1}`}
                        className={`citation-${index + 1}`}
                        variant="p"
                    >
                        {index + 1}. {citation.reference}{" "}
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={citation.link}
                        >
                            {citation.link}
                        </Link>
                    </Typography>
                ))}
            </Stack>
        </Box>
    );
};

export default Citations;
