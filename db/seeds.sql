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



INSERT INTO voters (first_name, last_name, email)
VALUES 
  ('James', 'Fraser', 'jf@goldenbough.edu'),
  ('Jack', 'London', 'jlondon@ualaska.edu'),
  ('Robert', 'Bruce', 'rbruce@scotland.net'),
  ('Peter', 'Greenaway', 'pgreenaway@postmodern.com'),
  ('Derek', 'Jarman', 'djarman@prospectcottage.net'),
  ('Paolo', 'Pasolini', 'ppasolini@salo.com'),
  ('Heathcote', 'Williams', 'hwilliams@bafta.com'),
  ('Sandy', 'Powell', 'spowell@oscars.com'),
  ('Emil', 'Zola', 'ezola@requin.com'),
  ('Sissy', 'Coalpits', 'scoalpits@greenaway.com'),
  ('Antoinette', 'Capet', 'acapet@dontloseyourhead.com'),
  ('Samuel', 'Delany', 'sdelany@dhalgren.com'),
  ('Tony', 'Duvert', 'tduvert@frenchletters.edu'),
  ('Dennis', 'Cooper', 'dcooper@georgemiles.com'),
  ('Monica', 'Bellucci', 'mbell@irreverisble.net'),
  ('Samuel', 'Johnson', 'sjohnson@boswell.com'),
  ('John', 'Dryden', 'jdryden@restoration.net'),
  ('Alexander', 'Pope', 'apope@cambridge.uk.edu'),
  ('Lionel', 'Johnson', 'ljohnson@darkangel.com'),
  ('Aubrey', 'Beardsley', 'abeardsely@wilde.net'),
  ('Tulse', 'Luper', 'tluper@films.net'),
  ('William', 'Morris', 'wmorris@victoriana.com'),
  ('George', 'Shaw', 'gshaw@labor.uk'),
  ('Arnold', 'Bennett', 'abennett@poemsgalore.com'),
  ('Algernon', 'Blackwood', 'ablack@creepy.net'),
  ('Rhoda', 'Broughton', 'rb@feminist.com'),
  ('Hart', 'Crane', 'hcrane@schwesters.de'),
  ('Vitorio', 'DeSica', 'vdesica@italiano.net'),
  ('Wilkie', 'Collins', 'wcollins@madmonkton.com'),
  ('Elizabeth', 'Gaskell', 'egaskell@pages.net'),
  ('George', 'Sand', 'gsand@pride.com'),
  ('Vernon', 'Lee', 'vlee@spooks.net'),
  ('Arthur', 'Machen', 'amach@spirits.com'),
  ('Frederick', 'Marryat', 'fmarry@boats.net'),
  ('Harriet', 'Martineau', 'hmartineau@journalism.com'),
  ('George', 'Meredith', 'gm@egoist.uk'),
  ('Margaret', 'Oliphant', 'moli@victoriana.com'),
  ('Anthony', 'Trollope', 'atrollope@barchester.com'),
  ('Charlotte', 'Yonge', 'cyonge@newday.com'),
  ('Horace', 'Walpole', 'hwal@otranto.net'),
  ('Matthew', 'Lewis', 'mlewis@monk.com'),
  ('William', 'Bedford', 'wbed@grandtour.net'),
  ('Anne', 'Radcliffe', 'arad@udolpho.uk'),
  ('Charles', 'Brown', 'cbrown@wieland.us'),
  ('Eliza', 'Parsons', 'lizzie@fierce.net'),
  ('Susan', 'Hill', 'shill@womaninblack.net'),
  ('Sydney', 'Owenson', 'Sowen@think.net'),
  ('Hubert', 'Crackanthorpe', 'hcrackan@goodletters.com'),
  ('William', 'Carleton', 'wcarleton@literature.com'),
  ('Gerald', 'Griffin', 'ggriff@lit.net');

  
INSERT INTO votes (voter_id, candidate_id) VALUES(1, 1);
INSERT INTO votes (voter_id, candidate_id) VALUES(2, 1);
INSERT INTO votes (voter_id, candidate_id) VALUES(3, 7);
INSERT INTO votes (voter_id, candidate_id) VALUES(4, 3);
INSERT INTO votes (voter_id, candidate_id) VALUES(5, 6);
INSERT INTO votes (voter_id, candidate_id) VALUES(6, 6);
INSERT INTO votes (voter_id, candidate_id) VALUES(7, 8);
INSERT INTO votes (voter_id, candidate_id) VALUES(8, 3);
INSERT INTO votes (voter_id, candidate_id) VALUES(9, 3);
INSERT INTO votes (voter_id, candidate_id) VALUES(10, 7);
INSERT INTO votes (voter_id, candidate_id) VALUES(11, 10);
INSERT INTO votes (voter_id, candidate_id) VALUES(12, 4);





