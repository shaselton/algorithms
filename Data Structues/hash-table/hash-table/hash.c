//
//  hash.c
//  hash-table
//
//  Created by Scott Haselton on 11/30/13.
//

#include <stdio.h>
#include "hash.h"

unsigned hash(char *str){
    unsigned generatedValue = 0;
    for( ; *str != '\0'; str++ ){
        generatedValue = *str + 31 * generatedValue;
    }
    return generatedValue % HASH_SIZE;
};

struct hash * lookup(char *key){
    struct hash *temp;
    
    for( temp = hashtable[ hash( key ) ]; temp != NULL; temp = temp->next ){
        if( strcmp( key, temp->key ) == 0 ){
            return temp;
        }
    }
    
    return NULL;
};


struct hash * install(char *key, char *value){
    struct hash *temp = lookup(key);
    unsigned hashLocation;
    
    if( temp == NULL ){
        temp = (struct hash *) malloc(sizeof(*temp));
        // check to see if there is enough space.  Duplicating string to the temp structure
        if( temp == NULL || ( temp->key = strdup( key ) ) == NULL ){
            return NULL;
        }
        hashLocation = hash( key );
        temp->next = hashtable[ hashLocation ];
        hashtable[ hashLocation ] = temp;
    }else{
        free( (void *) temp->value );
    }
    
    if((temp->value = strdup( value )) == NULL ){
        return NULL;
    }
    
    return temp;
};

void undef(char *key){
    struct hash *removeLocation = lookup(key);
    struct hash *temp;
    
    if( removeLocation != NULL ){
        printf("removing node: %s with value: %s\n", removeLocation->key, removeLocation->value);
       // possibly reassign nodes that are linked with the node to be deleted
        if (removeLocation->next != NULL){
            printf("reassign node: %s\n", removeLocation->next->key);
            temp = removeLocation->next;
            removeLocation->key = removeLocation->next->key;
            removeLocation->value = removeLocation->next->value;
            removeLocation->next = temp->next;
            free(temp);
        }else{
            free(removeLocation->key);
            free(removeLocation->value);
            free(removeLocation->next);
        }
    }
};