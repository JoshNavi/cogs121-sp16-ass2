-- Queries for crime by county
SELECT c.agency, COUNT(*) AS total
FROM cogs121_16_raw.arjis_crimes c
GROUP BY c.agency
ORDER BY total ASC;

-- Queries for crime by block address
SELECT c.block_address, COUNT(*) AS total
FROM cogs121_16_raw.arjis_crimes c
GROUP BY c.block_address
ORDER BY total ASC;

-- Queries for crime by description
SELECT c.charge_description, COUNT(*) AS total
FROM cogs121_16_raw.arjis_crimes c
GROUP BY c.charge_description
ORDER BY total ASC;

-- Queries for crime by description within specific agency
SELECT c.charge_description, COUNT(*) AS total
FROM cogs121_16_raw.arjis_crimes c
WHERE c.agency LIKE 'CARLSBAD'
GROUP BY c.charge_description
ORDER BY total ASC
LIMIT 5;
