//
//  hash.h
//  hash-table
//
//  Created by Scott Haselton on 11/30/13.
//  Heavy influence from 'The C Programming Language' pg 143

#ifndef hash_table_hash_h
#define hash_table_hash_h

// this should be a prime number to allow for even distribution into the hash table.
// NOTE: an easy way to testing the 'chaining' part of this code is to make the HASH_SIZE smaller...e.g. 3.
#define HASH_SIZE 101

// linked list structure
struct hash{
    struct hash *next;
    char *key;
    char *value;
};

// this actual structure that will manage the hashs.  a pointer table of type 'hash'
struct hash *hashtable[HASH_SIZE];

// generate a hash number that will be used to insert into the hashtable
unsigned hash(char *);

// returns the entry in the hashtable OR returns a NULL if not found
struct hash *lookup(char *);

// uses lookup to determine whether the key being installed is already present; if so,
// the new value will overwrite the old one.  Otherwise, a new entry is created.  Will return NULL
// if there is no more room for the entry.
struct hash *install(char *, char *);

#endif
