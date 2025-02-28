import { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";

interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [item, setItem] = useState<Item | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError("");
    setItem(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/items/${searchQuery}`);
      setItem(response.data);
    } catch (err) {
      setError("Item not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Search Warframe Items
        </Typography>
        <TextField
          label="Enter item name"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
          Search
        </Button>

        {loading && <CircularProgress sx={{ mt: 2 }} />}
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

        {item && (
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="subtitle1">{item.category}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
