const books = [
  {
    book: "1984",
    author: "George Orwell",
    buyingLink:
      "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
  },
  {
    book: "Brave New World",
    author: "Aldous Huxley",
    buyingLink:
      "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
  },
  {
    book: "Moby Dick",
    author: "Herman Melville",
    buyingLink:
      "https://www.amazon.com/Moby-Dick-Herman-Melville/dp/1503280784",
  },
  {
    book: "War and Peace",
    author: "Leo Tolstoy",
    buyingLink: "https://www.amazon.com/War-Peace-Leo-Tolstoy/dp/1427030200",
  },
  {
    book: "The Odyssey",
    author: "Homer",
    buyingLink: "https://www.amazon.com/Odyssey-Homer/dp/048683384X",
  },
  {
    book: "Ulysses",
    author: "James Joyce",
    buyingLink: "https://www.amazon.com/Ulysses-James-Joyce/dp/1840226358",
  },
  {
    book: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    buyingLink:
      "https://www.amazon.com/Crime-Punishment-Fyodor-Dostoevsky/dp/0679734503",
  },
  {
    book: "Madame Bovary",
    author: "Gustave Flaubert",
    buyingLink:
      "https://www.amazon.com/Madame-Bovary-Gustave-Flaubert/dp/0486414117",
  },
  {
    book: "Jane Eyre",
    author: "Charlotte Brontë",
    buyingLink:
      "https://www.amazon.com/Jane-Eyre-Charlotte-Bront%C3%AB/dp/0142437204",
  },
  {
    book: "Wuthering Heights",
    author: "Emily Brontë",
    buyingLink:
      "https://www.amazon.com/Wuthering-Heights-Emily-Bronte/dp/0141439556",
  },
  {
    book: "The Catcher in the Rye",
    author: "J.D. Salinger",
    buyingLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
  },
  {
    book: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    buyingLink:
      "https://www.amazon.com/Brothers-Karamazov-Norton-Critical-Editions/dp/0393926338",
  },
  {
    book: "Anna Karenina",
    author: "Leo Tolstoy",
    buyingLink:
      "https://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002",
  },
  {
    book: "The Iliad",
    author: "Homer",
    buyingLink: "https://www.amazon.com/Iliad-Homer/dp/0140275363",
  },
  {
    book: "In Search of Lost Time",
    author: "Marcel Proust",
    buyingLink:
      "https://www.amazon.com/Search-Lost-Time-Penguin-Classics/dp/0142437964",
  },
  {
    book: "The Divine Comedy",
    author: "Dante Alighieri",
    buyingLink:
      "https://www.amazon.com/Divine-Comedy-Dante-Alighieri/dp/0199535647",
  },
  {
    book: "Great Expectations",
    author: "Charles Dickens",
    buyingLink:
      "https://www.amazon.com/Great-Expectations-Charles-Dickens/dp/0141439564",
  },
  {
    book: "The Grapes of Wrath",
    author: "John Steinbeck",
    buyingLink:
      "https://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431",
  },
  {
    book: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    buyingLink:
      "https://www.amazon.com/Scarlet-Letter-Nathaniel-Hawthorne/dp/0486280489",
  },
  {
    book: "Moby-Dick",
    author: "Herman Melville",
    buyingLink:
      "https://www.amazon.com/Moby-Dick-Herman-Melville/dp/1503280785",
  },
  {
    book: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    buyingLink:
      "https://www.amazon.com/Picture-Dorian-Gray-Oscar-Wilde/dp/0486278077",
  },
  {
    book: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    buyingLink:
      "https://www.amazon.com/Count-Monte-Cristo-Penguin-Classics/dp/0140449264",
  },
  {
    book: "Catch-22",
    author: "Joseph Heller",
    buyingLink: "https://www.amazon.com/Catch-22-Joseph-Heller/dp/1451626657",
  },
  {
    book: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    buyingLink:
      "https://www.amazon.com/Slaughterhouse-Five-Novel-Kurt-Vonnegut/dp/0385333846",
  },
  {
    book: "A Tale of Two Cities",
    author: "Charles Dickens",
    buyingLink:
      "https://www.amazon.com/Tale-Two-Cities-Charles-Dickens/dp/0141439602",
  },
  {
    book: "The Sun Also Rises",
    author: "Ernest Hemingway",
    buyingLink:
      "https://www.amazon.com/Sun-Also-Rises-Ernest-Hemingway/dp/0684800713",
  },
  {
    book: "Heart of Darkness",
    author: "Joseph Conrad",
    buyingLink:
      "https://www.amazon.com/Heart-Darkness-Joseph-Conrad/dp/1540499485",
  },
  {
    book: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    buyingLink:
      "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221",
  },
  {
    book: "Lolita",
    author: "Vladimir Nabokov",
    buyingLink: "https://www.amazon.com/Lolita-Vladimir-Nabokov/dp/0679723161",
  },
  {
    book: "Les Misérables",
    author: "Victor Hugo",
    buyingLink:
      "https://www.amazon.com/Les-Misérables-Victor-Hugo/dp/0812974261",
  },
  {
    book: "The Trial",
    author: "Franz Kafka",
    buyingLink: "https://www.amazon.com/Trial-Franz-Kafka/dp/0805210405",
  },
  {
    book: "Middlemarch",
    author: "George Eliot",
    buyingLink:
      "https://www.amazon.com/Middlemarch-Penguin-Classics-George-Eliot/dp/0143107728",
  },
  {
    book: "Gulliver's Travels",
    author: "Jonathan Swift",
    buyingLink:
      "https://www.amazon.com/Gullivers-Travels-Jonathan-Swift/dp/0486283992",
  },
  {
    book: "The Metamorphosis",
    author: "Franz Kafka",
    buyingLink:
      "https://www.amazon.com/Metamorphosis-Franz-Kafka/dp/1503216669",
  },
  {
    book: "A Clockwork Orange",
    author: "Anthony Burgess",
    buyingLink:
      "https://www.amazon.com/Clockwork-Orange-Anthony-Burgess/dp/0393312836",
  },
  {
    book: "The Road",
    author: "Cormac McCarthy",
    buyingLink: "https://www.amazon.com/Road-Cormac-McCarthy/dp/0307387895",
  },
  {
    book: "Brave New World",
    author: "Aldous Huxley",
    buyingLink:
      "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
  },
  {
    book: "The Hobbit",
    author: "J.R.R. Tolkien",
    buyingLink: "https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X",
  },
  {
    book: "Fahrenheit 451",
    author: "Ray Bradbury",
    buyingLink:
      "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310",
  },
  {
    book: "The Sound and the Fury",
    author: "William Faulkner",
    buyingLink:
      "https://www.amazon.com/Sound-Fury-Norton-Critical-Editions/dp/0393964817",
  },
  {
    book: "Gone with the Wind",
    author: "Margaret Mitchell",
    buyingLink:
      "https://www.amazon.com/Gone-Wind-Margaret-Mitchell/dp/1451635621",
  },
  {
    book: "Dune",
    author: "Frank Herbert",
    buyingLink: "https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717",
  },
  {
    book: "Atlas Shrugged",
    author: "Ayn Rand",
    buyingLink: "https://www.amazon.com/Atlas-Shrugged-Ayn-Rand/dp/0451191145",
  },
  {
    book: "The Stranger",
    author: "Albert Camus",
    buyingLink: "https://www.amazon.com/Stranger-Albert-Camus/dp/0679720200",
  },
  {
    book: "To the Lighthouse",
    author: "Virginia Woolf",
    buyingLink:
      "https://www.amazon.com/Lighthouse-Virginia-Woolf/dp/0156907399",
  },
  {
    book: "East of Eden",
    author: "John Steinbeck",
    buyingLink: "https://www.amazon.com/East-Eden-John-Steinbeck/dp/0140186395",
  },
  {
    book: "On the Road",
    author: "Jack Kerouac",
    buyingLink: "https://www.amazon.com/Road-Jack-Kerouac/dp/0140283293",
  },
  {
    book: "The Catcher in the Rye",
    author: "J.D. Salinger",
    buyingLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
  },
  {
    book: "The Bell Jar",
    author: "Sylvia Plath",
    buyingLink: "https://www.amazon.com/Bell-Jar-Sylvia-Plath/dp/0060837020",
  },
  {
    book: "Dracula",
    author: "Bram Stoker",
    buyingLink: "https://www.amazon.com/Dracula-Bram-Stoker/dp/0486411095",
  },
  {
    book: "Rebecca",
    author: "Daphne du Maurier",
    buyingLink:
      "https://www.amazon.com/Rebecca-Daphne-du-Maurier/dp/0380730405",
  },
  {
    book: "The Shining",
    author: "Stephen King",
    buyingLink: "https://www.amazon.com/Shining-Stephen-King/dp/0307743659",
  },
  {
    book: "The Name of the Rose",
    author: "Umberto Eco",
    buyingLink: "https://www.amazon.com/Name-Rose-Umberto-Eco/dp/0156001314",
  },
  {
    book: "The Handmaid's Tale",
    author: "Margaret Atwood",
    buyingLink:
      "https://www.amazon.com/Handmaids-Tale-Margaret-Atwood/dp/038549081X",
  },
  {
    book: "Beloved",
    author: "Toni Morrison",
    buyingLink: "https://www.amazon.com/Beloved-Toni-Morrison/dp/1400033411",
  },
  {
    book: "Lolita",
    author: "Vladimir Nabokov",
    buyingLink: "https://www.amazon.com/Lolita-Vladimir-Nabokov/dp/0679723161",
  },
  {
    book: "Anna Karenina",
    author: "Leo Tolstoy",
    buyingLink:
      "https://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002",
  },
  {
    book: "David Copperfield",
    author: "Charles Dickens",
    buyingLink:
      "https://www.amazon.com/David-Copperfield-Charles-Dickens/dp/0140439447",
  },
  {
    book: "The Scarlet Pimpernel",
    author: "Baroness Orczy",
    buyingLink:
      "https://www.amazon.com/Scarlet-Pimpernel-Barnes-Noble-Classics/dp/1593083972",
  },
  {
    book: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    buyingLink:
      "https://www.amazon.com/Secret-Garden-Frances-Hodgson-Burnett/dp/0486428431",
  },
  {
    book: "Little Women",
    author: "Louisa May Alcott",
    buyingLink:
      "https://www.amazon.com/Little-Women-Louisa-May-Alcott/dp/1503290567",
  },
  {
    book: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    buyingLink:
      "https://www.amazon.com/Tree-Grows-Brooklyn-Perennial-Classics/dp/0061120073",
  },
  {
    book: "The Wind in the Willows",
    author: "Kenneth Grahame",
    buyingLink:
      "https://www.amazon.com/Wind-Willows-Kenneth-Grahame/dp/0763627104",
  },
  {
    book: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    buyingLink:
      "https://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197",
  },
  {
    book: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    buyingLink:
      "https://www.amazon.com/Alices-Adventures-Wonderland-Lewis-Carroll/dp/1503279926",
  },
  {
    book: "Peter Pan",
    author: "J.M. Barrie",
    buyingLink: "https://www.amazon.com/Peter-Pan-J-M-Barrie/dp/1503290281",
  },
  {
    book: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    buyingLink:
      "https://www.amazon.com/Charlie-Chocolate-Factory-Roald-Dahl/dp/0142410314",
  },
  {
    book: "Winnie-the-Pooh",
    author: "A.A. Milne",
    buyingLink: "https://www.amazon.com/Winnie-Pooh-A-Milne/dp/0525444432",
  },
  {
    book: "Anne of Green Gables",
    author: "L.M. Montgomery",
    buyingLink:
      "https://www.amazon.com/Anne-Green-Gables-Lucy-Maud-Montgomery/dp/1503290567",
  },
  {
    book: "Charlotte's Web",
    author: "E.B. White",
    buyingLink: "https://www.amazon.com/Charlottes-Web-E-B-White/dp/0061124958",
  },
  {
    book: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    buyingLink:
      "https://www.amazon.com/Lion-Witch-Wardrobe-Chronicles-Narnia/dp/0064404994",
  },
  {
    book: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    buyingLink:
      "https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/0747532699",
  },
  {
    book: "The Secret Life of Bees",
    author: "Sue Monk Kidd",
    buyingLink:
      "https://www.amazon.com/Secret-Life-Bees-Sue-Kidd/dp/0142001740",
  },
  {
    book: "Life of Pi",
    author: "Yann Martel",
    buyingLink: "https://www.amazon.com/Life-Pi-Yann-Martel/dp/0156027321",
  },
  {
    book: "The Book Thief",
    author: "Markus Zusak",
    buyingLink: "https://www.amazon.com/Book-Thief-Markus-Zusak/dp/0375842209",
  },
  {
    book: "The Kite Runner",
    author: "Khaled Hosseini",
    buyingLink:
      "https://www.amazon.com/Kite-Runner-Khaled-Hosseini/dp/159463193X",
  },
  {
    book: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    buyingLink:
      "https://www.amazon.com/Thousand-Splendid-Suns-Khaled-Hosseini/dp/1594489505",
  },
  {
    book: "Memoirs of a Geisha",
    author: "Arthur Golden",
    buyingLink:
      "https://www.amazon.com/Memoirs-Geisha-Arthur-Golden/dp/0679781587",
  },
  {
    book: "The Da Vinci Code",
    author: "Dan Brown",
    buyingLink:
      "https://www.amazon.com/Da-Vinci-Code-Robert-Langdon/dp/0307474275",
  },
  {
    book: "The Help",
    author: "Kathryn Stockett",
    buyingLink: "https://www.amazon.com/Help-Kathryn-Stockett/dp/0425232204",
  },
  {
    book: "The Fault in Our Stars",
    author: "John Green",
    buyingLink:
      "https://www.amazon.com/Fault-Our-Stars-John-Green/dp/014242417X",
  },
  {
    book: "The Hunger Games",
    author: "Suzanne Collins",
    buyingLink:
      "https://www.amazon.com/Hunger-Games-Suzanne-Collins/dp/0439023483",
  },
  {
    book: "Twilight",
    author: "Stephenie Meyer",
    buyingLink: "https://www.amazon.com/Twilight-Stephenie-Meyer/dp/0316015849",
  },

  {
    book: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    buyingLink:
      "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium-Book/dp/0307949486",
  },
  {
    book: "The Catcher in the Rye",
    author: "J.D. Salinger",
    buyingLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
  },
  {
    book: "Gone Girl",
    author: "Gillian Flynn",
    buyingLink: "https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378",
  },
  {
    book: "Fifty Shades of Grey",
    author: "E.L. James",
    buyingLink:
      "https://www.amazon.com/Fifty-Shades-Grey-Book-Trilogy/dp/0345803485",
  },
  {
    book: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    buyingLink:
      "https://www.amazon.com/Time-Travelers-Wife-Audrey-Niffenegger/dp/1476764832",
  },
  {
    book: "Outlander",
    author: "Diana Gabaldon",
    buyingLink: "https://www.amazon.com/Outlander-Diana-Gabaldon/dp/0440212561",
  },
  {
    book: "The Lovely Bones",
    author: "Alice Sebold",
    buyingLink:
      "https://www.amazon.com/Lovely-Bones-Alice-Sebold/dp/0316044938",
  },
  {
    book: "The Girl on the Train",
    author: "Paula Hawkins",
    buyingLink: "https://www.amazon.com/Girl-Train-Paula-Hawkins/dp/0735212155",
  },
  {
    book: "The Help",
    author: "Kathryn Stockett",
    buyingLink: "https://www.amazon.com/Help-Kathryn-Stockett/dp/0425232204",
  },
  {
    book: "The Fault in Our Stars",
    author: "John Green",
    buyingLink:
      "https://www.amazon.com/Fault-Our-Stars-John-Green/dp/014242417X",
  },
  {
    book: "The Hunger Games",
    author: "Suzanne Collins",
    buyingLink:
      "https://www.amazon.com/Hunger-Games-Suzanne-Collins/dp/0439023483",
  },
  {
    book: "Twilight",
    author: "Stephenie Meyer",
    buyingLink: "https://www.amazon.com/Twilight-Stephenie-Meyer/dp/0316015849",
  },
  {
    book: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    buyingLink:
      "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium-Book/dp/0307949486",
  },
  {
    book: "The Catcher in the Rye",
    author: "J.D. Salinger",
    buyingLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
  },
  {
    book: "Gone Girl",
    author: "Gillian Flynn",
    buyingLink: "https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378",
  },
  {
    book: "Fifty Shades of Grey",
    author: "E.L. James",
    buyingLink:
      "https://www.amazon.com/Fifty-Shades-Grey-Book-Trilogy/dp/0345803485",
  },
  {
    book: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    buyingLink:
      "https://www.amazon.com/Time-Travelers-Wife-Audrey-Niffenegger/dp/1476764832",
  },
  {
    book: "Outlander",
    author: "Diana Gabaldon",
    buyingLink: "https://www.amazon.com/Outlander-Diana-Gabaldon/dp/0440212561",
  },
  {
    book: "The Lovely Bones",
    author: "Alice Sebold",
    buyingLink:
      "https://www.amazon.com/Lovely-Bones-Alice-Sebold/dp/0316044938",
  },
  {
    book: "The Girl on the Train",
    author: "Paula Hawkins",
    buyingLink: "https://www.amazon.com/Girl-Train-Paula-Hawkins/dp/0735212155",
  },

  {
    book: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/059035342X"
  },
  {
    book: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064864"
  },
  {
    book: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369"
  },
  {
    book: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Goblet-Fire-Rowling/dp/0439139600"
  },
  {
    book: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Order-Phoenix-Rowling/dp/0439358078"
  },
  {
    book: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960"
  },
  {
    book: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    buyingLink: "https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708"
  },
  {
    book: "The Brilliant World of Tom Gates",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Brilliant-World-Tom-Gates/dp/1407148787"
  },
  {
    book: "Excellent Excuses (and Other Good Stuff)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Excellent-Excuses-Other-Good-Stuff/dp/1407134506"
  },
  {
    book: "Everything's Amazing (Sort Of)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Everythings-Amazing-Sort-Tom-Gates/dp/1407139486"
  },
  {
    book: "Genius Ideas (Mostly)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Genius-Ideas-Mostly-Liz-Pichon/dp/1407140867"
  },
  {
    book: "Absolutely Fantastic (At Some Things)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Absolutely-Fantastic-At-Some-Things/dp/1407157875"
  },
  {
    book: "Extra Special Treats (Not)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Extra-Special-Treats-Not-Gates/dp/1407143211"
  },
  {
    book: "A Tiny Bit Lucky",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Tiny-Bit-Lucky-Tom-Gates/dp/1407148736"
  },
  {
    book: "Yes! No (Maybe...)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Yes-No-Maybe-Liz-Pichon/dp/1407179870"
  },
  {
    book: "Top of the Class (Nearly)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Top-Class-Nearly-Tom-Gates/dp/1407163179"
  },
  {
    book: "Super Good Skills (Almost...)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Super-Good-Skills-Almost-Gates/dp/1407173155"
  },
  {
    book: "DogZombies Rule (For Now...)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/DogZombies-Rule-Now-Tom-Gates/dp/1407171330"
  },
  {
    book: "Family, Friends and Furry Creatures",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Family-Friends-Furry-Creatures-Gates/dp/1407179862"
  },
  {
    book: "Epic Adventure (Kind Of)",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Epic-Adventure-Kind-Tom-Gates/dp/1407193501"
  },
  {
    book: "Biscuits, Bands and Very Big Plans",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/Biscuits-Bands-Very-Plans-Gates/dp/1407193471"
  },
  {
    book: "What Monster?",
    author: "Liz Pichon",
    buyingLink: "https://www.amazon.com/What-Monster-Tom-Gates/dp/1407193498"
  },
  {
    book: "Think and Grow Rich",
    author: "Napoleon Hill",
    buyingLink: "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331"
  },
  {
    book: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    buyingLink: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274"
  },
  {
    book: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    buyingLink: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
  },
  {
    book: "Awaken the Giant Within",
    author: "Tony Robbins",
    buyingLink: "https://www.amazon.com/Awaken-Giant-Within-Immediate-Emotional/dp/0671791540"
  },
  {
    book: "The Power of Now",
    author: "Eckhart Tolle",
    buyingLink: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808"
  },
  {
    book: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    buyingLink: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713"
  },
  {
    book: "The Alchemist",
    author: "Paulo Coelho",
    buyingLink: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
  },
  {
    book: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    buyingLink: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X"
  },
  {
    book: "The Four Agreements",
    author: "Don Miguel Ruiz",
    buyingLink: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319"
  },
  {
    book: "Atomic Habits",
    author: "James Clear",
    buyingLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    book: "A Brief History of Time",
    author: "Stephen Hawking",
    buyingLink: "https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168"
  },
  {
    book: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    buyingLink: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095"
  },
  {
    book: "Guns, Germs, and Steel: The Fates of Human Societies",
    author: "Jared Diamond",
    buyingLink: "https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393317552"
  },
  {
    book: "The Selfish Gene",
    author: "Richard Dawkins",
    buyingLink: "https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606"
  },
  {
    book: "The Feynman Lectures on Physics",
    author: "Richard P. Feynman",
    buyingLink: "https://www.amazon.com/Feynman-Lectures-Physics-boxed-set/dp/0465023827"
  },
  {
    book: "Cosmos",
    author: "Carl Sagan",
    buyingLink: "https://www.amazon.com/Cosmos-Carl-Sagan/dp/0345539435"
  },
  {
    book: "The Man Who Knew Infinity: A Life of the Genius Ramanujan",
    author: "Robert Kanigel",
    buyingLink: "https://www.amazon.com/Man-Who-Knew-Infinity-Ramanujan/dp/1476763496"
  },
  {
    book: "The Emperor of All Maladies: A Biography of Cancer",
    author: "Siddhartha Mukherjee",
    buyingLink: "https://www.amazon.com/Emperor-All-Maladies-Biography-Cancer/dp/1439170916"
  },
  {
    book: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    buyingLink: "https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458121"
  },
  {
    book: "A People's History of the United States",
    author: "Howard Zinn",
    buyingLink: "https://www.amazon.com/Peoples-History-United-States/dp/0062397346"
  },
  {
    book: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg",
    buyingLink: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X"
  },
  {
    book: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    buyingLink: "https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930"
  },
  {
    book: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
    author: "Steven D. Levitt, Stephen J. Dubner",
    buyingLink: "https://www.amazon.com/Freakonomics-Economist-Explores-Hidden-Everything/dp/0060731338"
  },
  {
    book: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
    author: "Simon Singh",
    buyingLink: "https://www.amazon.com/Code-Book-Science-Secrecy-Cryptography/dp/0385495323"
  },
  {
    book: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    buyingLink: "https://www.amazon.com/Short-History-Nearly-Everything/dp/076790818X"
  },
  {
    book: "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
    author: "Brian Greene",
    buyingLink: "https://www.amazon.com/Elegant-Universe-Superstrings-Dimensions-Ultimate/dp/039333810X"
  },
  {
    book: "The Story of Mathematics: From Creating the Pyramids to Exploring Infinity",
    author: "Anne Rooney",
    buyingLink: "https://www.amazon.com/Story-Mathematics-Creating-Pyramids-Exploring/dp/0785835297"
  },
  {
    book: "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
    author: "Walter Isaacson",
    buyingLink: "https://www.amazon.com/Innovators-Group-Hackers-Geniuses-Revolution/dp/147670869X"
  },
  {
    book: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    buyingLink: "https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567"
  },
  {
    book: "The Ascent of Man",
    author: "Jacob Bronowski",
    buyingLink: "https://www.amazon.com/Ascent-Man-Jacob-Bronowski/dp/1538764311"
  },
  {
    book: "The Structure of Magic I: A Book About Language and Therapy",
    author: "Richard Bandler, John Grinder",
    buyingLink: "https://www.amazon.com/Structure-Magic-Book-Language-Therapy/dp/0831400447"
  },
  {
    book: "The Language Instinct: How the Mind Creates Language",
    author: "Steven Pinker",
    buyingLink: "https://www.amazon.com/Language-Instinct-Creates-Perennial-Classics/dp/0061336467"
  },
  {
    book: "The Elements of Style",
    author: "William Strunk Jr., E.B. White",
    buyingLink: "https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X"
  },
  {
    book: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    buyingLink: "https://www.amazon.com/Immortal-Life-Henrietta-Lacks/dp/1400052181"
  },
  {
    book: "The Demon-Haunted World: Science as a Candle in the Dark",
    author: "Carl Sagan",
    buyingLink: "https://www.amazon.com/Demon-Haunted-World-Science-Candle-Dark/dp/0345409469"
  },
  {
    book: "The Birth of the Modern: World Society 1815-1830",
    author: "Paul Johnson",
    buyingLink: "https://www.amazon.com/Birth-Modern-World-Society-1815-1830/dp/0060160502"
  },
  {
    book: "The Story of Philosophy: The Lives and Opinions of the World's Greatest Philosophers",
    author: "Will Durant",
    buyingLink: "https://www.amazon.com/Story-Philosophy-Lives-Opinions-Philosophers/dp/0671739166"
  },
  {
    book: "A Short History of Japan: From Samurai to Sony",
    author: "Curtis Andressen",
    buyingLink: "https://www.amazon.com/Short-History-Japan-Samurai-Sony/dp/1865085162"
  },
  {
    book: "A History of the World in 100 Objects",
    author: "Neil MacGregor",
    buyingLink: "https://www.amazon.com/History-World-100-Objects/dp/0670022705"
  },
  {
    book: "The Greatest Show on Earth: The Evidence for Evolution",
    author: "Richard Dawkins",
    buyingLink: "https://www.amazon.com/Greatest-Show-Earth-Evidence-Evolution/dp/1416594787"
  },
  {
    book: "Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time",
    author: "Dava Sobel",
    buyingLink: "https://www.amazon.com/Longitude-Genius-Greatest-Scientific-Problem/dp/080271529X"
  },
  {
    book: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    buyingLink: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
  },
  {
    book: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    buyingLink: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"
  },
  {
    book: "Head First Design Patterns",
    author: "Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra",
    buyingLink: "https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124"
  },
  {
    book: "Code Complete: A Practical Handbook of Software Construction",
    author: "Steve McConnell",
    buyingLink: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670"
  },
  {
    book: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    buyingLink: "https://www.amazon.com/Eloquent-JavaScript-Modern-Introduction-Programming/dp/1593279507"
  },
  {
    book: "Effective Java",
    author: "Joshua Bloch",
    buyingLink: "https://www.amazon.com/Effective-Java-3rd-Joshua-Bloch/dp/0134685997"
  },
  {
    book: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "Andrew Hunt, David Thomas",
    buyingLink: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery/dp/0135957052"
  },
  {
    book: "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
    author: "Eric Matthes",
    buyingLink: "https://www.amazon.com/Python-Crash-Course-Eric-Matthes/dp/1593276036"
  },
  {
    book: "Learn You a Haskell for Great Good!: A Beginner's Guide",
    author: "Miran Lipovaca",
    buyingLink: "https://www.amazon.com/Learn-You-Haskell-Great-Good/dp/1593272839"
  },
  {
    book: "Programming Pearls",
    author: "Jon Bentley",
    buyingLink: "https://www.amazon.com/Programming-Pearls-2nd-Jon-Bentley/dp/0201657880"
  },
  {
    book: "The Jungle Book",
    author: "Rudyard Kipling",
    buyingLink: "https://www.amazon.com/Jungle-Books-Rudyard-Kipling/dp/1503332320"
  },
  {
    book: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    buyingLink: "https://www.amazon.com/Alices-Adventures-Wonderland-Lewis-Carroll/dp/1503275673"
  },
  {
    book: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    buyingLink: "https://www.amazon.com/Adventures-Sherlock-Holmes-Arthur-Doyle/dp/1449934618"
  },
  {
    book: "Winnie-the-Pooh",
    author: "A.A. Milne",
    buyingLink: "https://www.amazon.com/Winnie-Pooh-A-Milne/dp/1405280844"
  },
  {
    book: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    buyingLink: "https://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197"
  },
  {
    book: "Peter Pan",
    author: "J.M. Barrie",
    buyingLink: "https://www.amazon.com/Peter-Pan-Great-Illustrated-Classics/dp/1435147374"
  },
  {
    book: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    buyingLink: "https://www.amazon.com/Chronicles-Narnia-C-S-Lewis/dp/0066238501"
  },
  {
    book: "Treasure Island",
    author: "Robert Louis Stevenson",
    buyingLink: "https://www.amazon.com/Treasure-Island-Illustrated-Classics-Stevenson/dp/0766632631"
  },
  {
    book: "Grimm's Fairy Tales",
    author: "Jacob Grimm and Wilhelm Grimm",
    buyingLink: "https://www.amazon.com/Grimms-Fairy-Tales-Brothers-Grimm/dp/1509826668"
  },
  {
    book: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    buyingLink: "https://www.amazon.com/Wonderful-Wizard-Oz-Illustrated-Classics/dp/0766632631"
  },


  {
    book: "Relativity: The Special and General Theory",
    author: "Albert Einstein",
    buyingLink: "https://www.amazon.com/Relativity-Special-General-Theory-Einstein/dp/1614277839"
  },
  {
    book: "A Brief History of Time",
    author: "Stephen Hawking",
    buyingLink: "https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168"
  },
  {
    book: "The Origin of Species",
    author: "Charles Darwin",
    buyingLink: "https://www.amazon.com/Origin-Species-Charles-Darwin/dp/1514695572"
  },
  {
    book: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    buyingLink: "https://www.amazon.com/Structure-Scientific-Revolutions-Thomas-Kuhn/dp/0226458121"
  },
  {
    book: "The Feynman Lectures on Physics",
    author: "Richard P. Feynman",
    buyingLink: "https://www.amazon.com/Feynman-Lectures-Physics-Vol/dp/0201021153"
  },
  {
    book: "The Selfish Gene",
    author: "Richard Dawkins",
    buyingLink: "https://www.amazon.com/Selfish-Gene-Anniversary-Landmark-Science/dp/0198788606"
  },
  {
    book: "The Republic",
    author: "Plato",
    buyingLink: "https://www.amazon.com/Republic-Penguin-Classics-Plato/dp/0140455116"
  },
  {
    book: "Critique of Pure Reason",
    author: "Immanuel Kant",
    buyingLink: "https://www.amazon.com/Critique-Pure-Reason-Immanuel-Kant/dp/0486823189"
  },
  {
    book: "Principia Mathematica",
    author: "Alfred North Whitehead, Bertrand Russell",
    buyingLink: "https://www.amazon.com/Principia-Mathematica-Philosophical-Library/dp/1604500086"
  },
  {
    book: "The Nature of the Physical World",
    author: "Arthur Eddington",
    buyingLink: "https://www.amazon.com/Nature-Physical-World-Outline-Modern/dp/1614279610"
  },
  {
    book: "Dialogues Concerning Natural Religion",
    author: "David Hume",
    buyingLink: "https://www.amazon.com/Dialogues-Concerning-Natural-Religion-Penguin/dp/0140445366"
  },
  {
    book: "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
    author: "Brian Greene",
    buyingLink: "https://www.amazon.com/Elegant-Universe-Superstrings-Dimensions-Theory/dp/039333810X"
  },
  {
    book: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    buyingLink: "https://www.amazon.com/G%C3%B6del-Escher-Bach-Eternal-Golden/dp/0465026567"
  },
  {
    book: "The Phenomenon of Man",
    author: "Pierre Teilhard de Chardin",
    buyingLink: "https://www.amazon.com/Phenomenon-Man-Pierre-Teilhard-Chardin/dp/006090495X"
  },
  {
    book: "The Grand Design",
    author: "Stephen Hawking, Leonard Mlodinow",
    buyingLink: "https://www.amazon.com/Grand-Design-Stephen-Hawking/dp/0553819224"
  },
  {
    book: "The Logic of Scientific Discovery",
    author: "Karl Popper",
    buyingLink: "https://www.amazon.com/Logic-Scientific-Discovery-Karl-Popper/dp/1139177806"
  },
  {
    book: "The Extended Phenotype",
    author: "Richard Dawkins",
    buyingLink: "https://www.amazon.com/Extended-Phenotype-Long-Gene/dp/0198788916"
  },
  {
    book: "Being and Time",
    author: "Martin Heidegger",
    buyingLink: "https://www.amazon.com/Being-Time-Harper-Perennial-Modern/dp/0061575593"
  },
  {
    book: "The Fabric of Reality",
    author: "David Deutsch",
    buyingLink: "https://www.amazon.com/Fabric-Reality-Science-Illusion-Shortcuts/dp/014027541X"
  },
  {
    book: "The Social Contract",
    author: "Jean-Jacques Rousseau",
    buyingLink: "https://www.amazon.com/Social-Contract-Essays-Principles-Political/dp/0486426920"
  }
];

let searchInput = document.getElementById("Search");
let lib = document.getElementsByClassName("books")[0];

function search() {
  searchInput.addEventListener("input", () => {
    let str = searchInput.value.toLowerCase();
    console.log(str);
    let fil = books.filter((item) => {
      return item.book.toLowerCase().includes(str);
    });
    console.log(fil);
    update(fil);
  });
}

function update(fil) {
    let counter = 0;
  lib.innerHTML = '<h1 style="font-family: sans-serif;">Books</h1>';
  fil.forEach((element) => {
    counter++
    let ele = document.createElement("div");
    let a = document.createElement("a");
    a.innerHTML = `<br> Link: ${element.buyingLink}`;
    a.href = element.buyingLink;
    ele.innerHTML = `${counter}. Book: ${element.book} <br> Author: ${element.author}`;
    lib.appendChild(ele);
    ele.append(a);
  });
}

search();
