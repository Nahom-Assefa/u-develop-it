INSERT INTO parties (name, description)
VALUES 
  ('DAPP Party', 
  'The Dapps party support a multiverse world. They don/t believe in one chain
  to rule them all. They look at on-chain activity a lot and github commits'),
  ('EndFed Party',
  'The EndFed/s want to see an end to fractional reserve banking as we know it.
  They believe it is the casual factor in inequality, boom and busts, and corruption'),
  ('Meme Chain Party', 
  'Meme Chain party is about having fun. It/s about narratives and community. 
   They support trolling, the sovereign individual, and a yolo lifestyle');


INSERT INTO candidates (first_name, last_name, party_id, industry_connected)
VALUES 
    ('Bitcoin', 'BTC', 2, 1),
    ('Avalanche', 'AJAX', 1, 1),
    ('Cardano', 'ADA', 1, 0),
    ('Ethereum', 'ETH', 1, 1),
    ('Polkadot', 'DOT', 1, 1),
    ('Vechain', 'VET', NULL, 0),
    ('Kishu Inu', 'KISHU', 3, 0),
    ('Quant', 'QNT', 1, 1),
    ('Shiba Inu', 'SHIB', 3, 1),
    ('Dogecoin', 'DOGE', 3, 1);

-- INSERT INTO candidates (first_name, last_name, industry_connected)
-- VALUES
--   ('Ronald', 'Firbank', 1),
--   ('Virginia', 'Woolf', 1),
--   ('Piers', 'Gaveston', 0),
--   ('Charles', 'LeRoi', 1),
--   ('Katherine', 'Mansfield', 1),
--   ('Dora', 'Carrington', 0),
--   ('Edward', 'Bellamy', 0),
--   ('Montague', 'Summers', 1),
--   ('Octavia', 'Butler', 1),
--   ('Unica', 'Zurn', 1);





